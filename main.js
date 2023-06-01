const selected = {};


function generateMapNodes() {
    const map = document.getElementById('map-container');
    for (let i = 0; i < 60 ** 2; i++) {
        const node = document.createElement('div');
        node.addEventListener('click', () => {
            node.childNodes[0].classList.toggle('capital');
        });
        map.appendChild(node);
    }
}

function exportMap() {
    const map = document.getElementById('map-container');
    map.childNodes.forEach((n, i) => {
        if (n.classList.contains('capital')) {
            selected[i] = true;
        }
    });
    console.log(JSON.stringify(selected));
}

function loadExport() {
    fetch('./assets/map.json')
        .then((response) => response.json())
        .then((json) => {
            const map = document.getElementById('map-container');
            Object.keys(json).forEach((index) => {
                map.childNodes[index].classList.add('active');
                const circle = document.createElement('div');
                circle.classList.add('circle');
                map.childNodes[index].appendChild(circle);
            });
        });
}

generateMapNodes();
loadExport();