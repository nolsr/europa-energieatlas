const selected = {};

const countries = {
    ireland: {
        points: [],
        capital: 0
    },
    unitedKingdom: {
        points: [],
        capital: 0
    },
    protugal: {
        points: [],
        capital: 0
    },
    spain: {
        points: [],
        capital: 0
    },
    france: {
        points: [],
        capital: 0
    },
    belgium: {
        points: [],
        capital: 0
    },
    netherlands: {
        points: [],
        capital: 0
    },
    switzerland: {
        points: [],
        capital: 0
    },
    italy: {
        points: [],
        capital: 0
    },
    germany: {
        points: [],
        capital: 0
    },
    denmark: {
        points: [],
        capital: 0
    },
    norway: {
        points: [],
        capital: 0
    },
    sweden: {
        points: [],
        capital: 0
    },
    finnland: {
        points: [],
        capital: 0
    },
    estonia: {
        points: [],
        capital: 0
    },
    latvia: {
        points: [],
        capital: 0
    },
    lithuania: {
        points: [],
        capital: 0
    },
    belorussia: {
        points: [],
        capital: 0
    },
    poland: {
        points: [],
        capital: 0
    },
    czekRepublic: {
        points: [],
        capital: 0
    },
    austria: {
        points: [],
        capital: 0
    },
    slovenia: {
        points: [],
        capital: 0
    },
    croatia: {
        points: [],
        capital: 0
    },
    bosnia: {
        points: [],
        capital: 0
    },
    serbia: {
        points: [],
        capital: 0
    },
    ukraine: {
        points: [],
        capital: 0
    },
    slovakia: {
        points: [],
        capital: 0
    },
    hungary: {
        points: [],
        capital: 0
    },
    romania: {
        points: [],
        capital: 0
    },
    moldavia: {
        points: [],
        capital: 0
    },
    bulgaria: {
        points: [],
        capital: 0
    },
    greece: {
        points: [],
        capital: 0
    },
    macedonia: {
        points: [],
        capital: 0
    },
    albania: {
        points: [],
        capital: 0
    },
    montenegro: {
        points: [],
        capital: 0
    },
    kosovo: {
        points: [],
        capital: 0
    }
}

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