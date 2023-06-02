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
        points: [{"2251":true,"2252":true,"2253":true,"2310":true,"2311":true,"2312":true,"2314":true,"2369":true,"2370":true,"2371":true,"2372":true,"2373":true,"2430":true,"2431":true}],
        capital: 0
    },
    slovenia: {
        points: [{"2432":true,"2433":true,"2490":true,"2492":true}],
        capital: 0
    },
    croatia: {
        points: [{"2493":true,"2494":true,"2550":true,"2551":true,"2552":true,"2554":true,"2555":true,"2612":true,"2616":true,"2672":true,"2733":true}],
        capital: 0
    },
    bosnia: {
        points: [{"2613":true,"2614":true,"2615":true,"2673":true,"2674":true,"2675":true,"2676":true,"2734":true,"2735":true,"2795":true,"2796":true}],
        capital: 0
    },
    serbia: {
        points: [{"2556":true,"2557":true,"2558":true,"2617":true,"2618":true,"2619":true,"2677":true,"2679":true,"2680":true,"2737":true,"2738":true,"2739":true,"2740":true,"2797":true,"2799":true,"2800":true,"2801":true,"2860":true}],
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
        points: [{"2317":true,"2318":true,"2319":true,"2320":true,"2374":true,"2375":true,"2376":true,"2377":true,"2378":true,"2379":true,"2434":true,"2435":true,"2436":true,"2438":true,"2495":true,"2496":true,"2497":true,"2498":true}],
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
        points: [{"2686":true,"2741":true,"2742":true,"2743":true,"2744":true,"2745":true,"2746":true,"2747":true,"2802":true,"2803":true,"2804":true,"2805":true,"2806":true,"2861":true,"2863":true,"2864":true,"2865":true,"2866":true,"2867":true,"2922":true,"2923":true,"2924":true}],
        capital: 0
    },
    greece: {
        points: [{"2925":true,"2981":true,"2982":true,"2983":true,"2984":true,"2985":true,"3039":true,"3040":true,"3041":true,"3042":true,"3043":true,"3098":true,"3099":true,"3100":true,"3102":true,"3104":true,"3157":true,"3158":true,"3159":true,"3160":true,"3161":true,"3165":true,"3218":true,"3219":true,"3220":true,"3221":true,"3279":true,"3280":true,"3281":true,"3282":true,"3283":true,"3285":true,"3339":true,"3340":true,"3341":true,"3344":true,"3400":true,"3401":true,"3405":true,"3406":true,"3461":true,"3468":true,"3527":true,"3583":true,"3584":true,"3585":true}],
        capital: 0
    },
    macedonia: {
        points: [{"2919":true,"2920":true,"2921":true,"2978":true,"2980":true}],
        capital: 0
    },
    albania: {
        points: [{"2917":true,"2918":true,"2977":true,"3038":true,"3097":true}],
        capital: 0
    },
    montenegro: {
        points: [{"2856":true}],
        capital: 0
    },
    kosovo: {
        points: [{"2798":true,"2858":true}],
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