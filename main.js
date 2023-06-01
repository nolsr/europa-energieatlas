function generateMapNodes() {
    const map = document.getElementById('map-container');
    for (let i = 0; i < 60 ** 2; i++) {
        const node = document.createElement('div');
        node.classList.add('node');
        node.addEventListener('click', () => {
            node.classList.toggle('active');
        });
        map.appendChild(node);
    }
}

const selected = {};
function exportMap() {
    const map = document.getElementById('map-container');
    map.childNodes.forEach((n, i) => {
        if (n.classList.contains('active')) {
            selected[i] = true;
        }
    });
    console.log(JSON.stringify(selected));
}

generateMapNodes();