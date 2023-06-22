const selected = {};

function generateMapNodes() {
    const map = document.getElementById('map-container');
    for (let i = 0; i < 60 ** 2; i++) {
        const node = document.createElement('div');
        node.classList.add('node');
        node.addEventListener('click', () => {
            node.classList.toggle('country');
        });
        map.appendChild(node);
    }
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
    const map = document.getElementById('map-container');
    console.log(countries);
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

generateMapNodes();
loadExport();