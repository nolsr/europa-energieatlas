const selected = {};
let map, btn1, btn2, btn3, residents, bpi, hdi, selectedCountryName,
    oilBar, gasBar, coalBar, nuclearBar, waterBar, renewableBar,
    lastHovered, oilValue, gasValue, nuclearValue, coalValue, waterValue,
    renewableValue, countryInfo, unit;
let initial = true;

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

let inRelation = null;

document.addEventListener("DOMContentLoaded", () => {
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    btn3 = document.getElementById('btn3');
    residents = document.getElementById('residents');
    bpi = document.getElementById('bpi');
    hdi = document.getElementById('hdi');
    map = document.getElementById('map-container');
    selectedCountryName = document.getElementById('selectedCountryName');
    oilBar = document.getElementById('oil-bar');
    gasBar = document.getElementById('gas-bar');
    coalBar = document.getElementById('coal-bar');
    nuclearBar = document.getElementById('nuclear-bar');
    waterBar = document.getElementById('water-bar');
    renewableBar = document.getElementById('renewable-bar');
    oilValue = document.getElementById('oil-value');
    gasValue = document.getElementById('gas-value');
    nuclearValue = document.getElementById('nuclear-value');
    coalValue = document.getElementById('coal-value');
    waterValue = document.getElementById('water-value');
    renewableValue = document.getElementById('renewable-value');
    countryInfo = document.getElementById('countryInfo');
    unit = document.getElementById('unit');
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
    let i = 1;
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
        map.childNodes[countryData.capital].childNodes[0].style.zIndex = 100 + i++;
        map.childNodes[countryData.capital].childNodes[0].addEventListener('mouseover', () => {
            lastHovered = country;
            hoverCountry(countryData);
        });
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
    const consumption = getTotalConsumption(structuredClone(countryData));
    return 15 + (11 * consumption);
}

function getTotalConsumption(data) {
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
    return Object.values(data).reduce((a, b) => a + b);
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
    if (lastHovered) {
        hoverCountry(countries[lastHovered]);
    }
}

function selectYear(year) {
    selectedYear = year;
    colorCountries(selectedYear, false);
    if (lastHovered) {
        hoverCountry(countries[lastHovered]);
    }

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
function setInRelation(rel) {
    inRelation = rel;
    switch (rel) {
        case 'residents':
            bpi.checked = false;
            hdi.checked = false;
            break;
        case 'bip':
            residents.checked = false;
            hdi.checked = false;
            break;
        case 'hdi':
            residents.checked = false;
            bpi.checked = false;
            break;
    }
}

function hoverCountry(countryData) {
    if (initial) {
        initial = false;
        countryInfo.style.opacity = 1;
    }
    // 4.76 highest value
    selectedCountryName.innerHTML = countryData['countryName'] + (countryData['isOther'] ? '*' : '');
    unit.style.opacity = countryData['isOther'] == true ? 1 : 0;

    const oil = countryData.data[selectedYear].oil;
    const gas = countryData.data[selectedYear].gas;
    const coal = countryData.data[selectedYear].coal;
    const nuclear = countryData.data[selectedYear].nuclear;
    const water = countryData.data[selectedYear].water;
    const renewable = countryData.data[selectedYear].renewable;

    oilBar.style.width = `${oil / 4.76 * 100}%`;
    gasBar.style.width = `${gas / 4.76 * 100}%`;
    coalBar.style.width = `${coal / 4.76 * 100}%`;
    nuclearBar.style.width = `${nuclear / 4.76 * 100}%`;
    waterBar.style.width = `${water / 4.76 * 100}%`;
    renewableBar.style.width = `${renewable / 4.76 * 100}%`;

    oilBar.style.opacity = ignore.oil ? 0 : 1;
    gasBar.style.opacity = ignore.gas ? 0 : 1;
    coalBar.style.opacity = ignore.coal ? 0 : 1;
    nuclearBar.style.opacity = ignore.nuclear ? 0 : 1;
    waterBar.style.opacity = ignore.water ? 0 : 1;
    renewableBar.style.opacity = ignore.renewable ? 0 : 1;

    oilValue.style.opacity = ignore.oil ? 0 : 1;
    gasValue.style.opacity = ignore.gas ? 0 : 1;
    coalValue.style.opacity = ignore.coal ? 0 : 1;
    nuclearValue.style.opacity = ignore.nuclear ? 0 : 1;
    waterValue.style.opacity = ignore.water ? 0 : 1;
    renewableValue.style.opacity = ignore.renewable ? 0 : 1;

    oilValue.innerHTML = `${oil == -1 ? '<0.05 EJ' : oil == 0 ? '/' : oil + ' EJ'}`;
    gasValue.innerHTML = `${gas == -1 ? '<0.05 EJ' : gas == 0 ? '/' : gas + ' EJ'}`;
    coalValue.innerHTML = `${coal == -1 ? '<0.05 EJ' : coal == 0 ? '/' : coal + ' EJ'}`;
    nuclearValue.innerHTML = `${nuclear == -1 ? '<0.05 EJ' : nuclear == 0 ? '/' : nuclear + ' EJ'}`;
    waterValue.innerHTML = `${water == -1 ? '<0.05 EJ' : water == 0 ? '/' : water + ' EJ'}`;
    renewableValue.innerHTML = `${renewable == -1 ? '<0.05 EJ' : renewable == 0 ? '/' : renewable + ' EJ'}`;
}