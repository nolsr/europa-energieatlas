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
    // mit require(fs) vielleicht schneller
    fetch('./assets/map.json')
        .then((response) => response.json())
        .then((mapJson) => {
            fetch('./assets/capitals.json')
                .then(response => response.json())
                .then(capitalJson => {
                    const map = document.getElementById('map-container');
                    Object.keys(mapJson).forEach((index) => {
                        map.childNodes[index].classList.add('active');
                        const circle = document.createElement('div');
                        circle.classList.add('circle');
                        map.childNodes[index].appendChild(circle);
                    });
                    Object.keys(capitalJson).forEach(index => {
                        map.childNodes[index].childNodes[0].classList.add('capital');
                    })
                })
        });
}

generateMapNodes();
loadExport();