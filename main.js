const selected = {};
let map = null;

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

document.addEventListener("DOMContentLoaded", () => {
    map = document.getElementById('map-container');
    generateMapNodes(() => {
        loadScript('./countries.js', function () {
            loadExport();
            colorCountries(2011);
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
        node.addEventListener('click', () => {
            // node.classList.toggle('country');
        });
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
        setTimeout(() => colorCountry(Object.values(countries)[i], year), delay ? 200 * (i + 1) : 0);
    }
}

function colorCountry(countryData, year) {
    const c = getCountryColor(countryData.data[year]);
    const size = calcCapitalSize(countryData.data[year]);
    map.childNodes[countryData.capital].childNodes[0].style.backgroundColor = c;
    map.childNodes[countryData.capital].childNodes[0].style.width = size + 'px';
    map.childNodes[countryData.capital].childNodes[0].style.height = size + 'px';
    countryData.points.forEach(p => {
        map.childNodes[p].childNodes[0].style.backgroundColor = c;
        map.childNodes[p].childNodes[0].style.opacity = 1;
    });
}

function calcCapitalSize(data) {
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
    colorCountries(2011, false);
}