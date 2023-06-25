const selected = {};
let map, btn1, btn2, btn3;

const cOil = '#724DAE';
const cGas = '#E72061';
const cCoal = '#F06D3D';
const cNuclear = '#E3CF00';
const cWater = '#1CC0C9';
const cRenewable = '#57D64A';

const ignore = {
    oil: false,
    gas: false,
    coal: false,
    nuclear: false,
    water: false,
    renewable: false
}

let selectedYear = 2021;


document.addEventListener("DOMContentLoaded", () => {
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    map = document.getElementById('map-container');
    generateMapNodes(() => {
        loadScript('./countries.js', function () {
            loadExport();
            colorCountries(selectedYear);
        });
    });
});

function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function generateMapNodes(_callback) {
    const map = document.getElementById('map-container');
    for (let i = 0; i < 60 ** 2; i++) {
        const node = document.createElement('div');
        node.classList.add('node');
        map.appendChild(node);
    }
    _callback();
}

function exportMap() {
    const map = document.getElementById('map-container');
    map.childNodes.forEach((n, i) => {
        if (n.classList.contains('country')) {
            selected[i] = true;
        }
    });
    console.log(JSON.stringify(selected));
}

function loadExport() {
    for (const [country, countryData] of Object.entries(countries)) {
        countryData.points.forEach(p => {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            map.childNodes[p].classList.add('active');
            map.childNodes[p].appendChild(circle);
        });
        const circle = document.createElement('div');
        circle.classList.add('circle');
        map.childNodes[countryData.capital].appendChild(circle);
        map.childNodes[countryData.capital].childNodes[0].classList.add('capital');
    }
}

function colorCountries(year, delay = true) {
    for (let i = 0; i < Object.keys(countries).length; i++) {
        debounce(colorCountry, delay ? 200 * (i + 1) : 0)(Object.values(countries)[i], year, delay);
    }
}

function colorCountry(countryData, year, shortAnim) {
    const c = getCountryColor(countryData.data[year]);
    const size = calcCapitalSize(countryData.data[year]);
    const capitalElement = map.childNodes[countryData.capital].childNodes[0];
    const animName = shortAnim ? 'shortAnim' : 'anim';

    capitalElement.style.width = size + 'px';
    capitalElement.style.height = size + 'px';
    capitalElement.classList.add(animName);

    countryData.points.forEach(p => {
        map.childNodes[p].childNodes[0].classList.add(animName);
    });

    setTimeout(() => {
        capitalElement.style.backgroundColor = c;
        countryData.points.forEach(p => {
            const pointElement = map.childNodes[p].childNodes[0];
            pointElement.style.backgroundColor = c;
            pointElement.style.opacity = 1;
        });

        setTimeout(() => {
            capitalElement.classList.remove(animName);
            countryData.points.forEach(p => {
                map.childNodes[p].childNodes[0].classList.remove(animName);
            });
        }, 500);
    }, 0);
}

const debounce = (fn, delay, shortAnim) => { let timeoutId; return function () { clearTimeout(timeoutId); timeoutId = setTimeout(() => { fn.apply(this, arguments); }, delay, shortAnim); }; };

function calcCapitalSize(countryData) {
    const data = structuredClone(countryData);
    Object.keys(ignore).forEach(key => {
        if (ignore[key]) {
            delete data[key];
        }
    })
    Object.keys(data).forEach(key => {
        if (data[key] == -1) {
            data[key] = 0.049;
        }
    })
    const consumption = Object.values(data).reduce((a, b) => a + b);
    return 15 + (11 * consumption);
}

function getHighestValueString(countryData) {
    data = structuredClone(countryData);
    Object.keys(ignore).forEach(key => {
        if (ignore[key]) {
            delete data[key];
        }
    })
    return Object.keys(data).reduce(function (a, b) { return data[a] > data[b] ? a : b });
}

function getCountryColor(data) {
    switch (getHighestValueString(data)) {
        case 'oil':
            return cOil;
        case 'gas':
            return cGas;
        case 'coal':
            return cCoal;
        case 'nuclear':
            return cNuclear;
        case 'water':
            return cWater;
        case 'renewable':
            return cRenewable;
    }
    return '#FFF';
}

function toggleCheckbox(checkbox, key) {
    ignore[key] = !checkbox.checked;
    console.log(ignore);
    colorCountries(selectedYear, false);
}

function selectYear(year) {
    selectedYear = year;
    colorCountries(selectedYear, false);

    switch (year) {
        case 2011:
            btn1.classList.add('selected');
            btn2.classList.remove('selected');
            btn3.classList.remove('selected');
            break;
        case 2016:
            btn1.classList.remove('selected');
            btn2.classList.add('selected');
            btn3.classList.remove('selected');
            break;
        case 2021:
            btn1.classList.remove('selected');
            btn2.classList.remove('selected');
            btn3.classList.add('selected');
            break;
    }
}