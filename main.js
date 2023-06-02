const selected = {};

const countries = {
    ireland: {
        points: [{"1271":true,"1272":true,"1329":true,"1330":true,"1331":true,"1389":true,"1390":true,"1391":true,"1392":true,"1449":true,"1450":true,"1451":true,"1508":true,"1509":true,"1510":true,"1511":true,"1512":true,"1568":true,"1569":true,"1570":true,"1571":true}],
        capital: 0
    },
    unitedKingdom: {
        points: [{"920":true,"980":true,"1034":true,"1036":true,"1037":true,"1038":true,"1093":true,"1095":true,"1096":true,"1097":true,"1155":true,"1156":true,"1157":true,"1158":true,"1215":true,"1216":true,"1217":true,"1218":true,"1274":true,"1275":true,"1276":true,"1332":true,"1333":true,"1335":true,"1336":true,"1337":true,"1393":true,"1395":true,"1396":true,"1397":true,"1456":true,"1457":true,"1514":true,"1516":true,"1517":true,"1574":true,"1575":true,"1576":true,"1577":true,"1632":true,"1633":true,"1634":true,"1635":true,"1636":true,"1637":true,"1694":true,"1695":true,"1696":true,"1697":true,"1698":true,"1699":true,"1752":true,"1753":true,"1754":true,"1755":true,"1756":true,"1758":true,"1811":true,"1812":true,"1813":true,"1814":true,"1815":true,"1816":true,"1817":true}],
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
        points: [{"1348":true,"1407":true,"1408":true,"1467":true,"1468":true,"1527":true,"1528":true,"1589":true}],
        capital: 0
    },
    norway: {
        points: [{"41":true,"42":true,"100":true,"101":true,"102":true,"103":true,"157":true,"158":true,"159":true,"160":true,"216":true,"217":true,"218":true,"219":true,"220":true,"276":true,"277":true,"335":true,"394":true,"454":true,"513":true,"572":true,"573":true,"631":true,"632":true,"690":true,"691":true,"692":true,"749":true,"750":true,"751":true,"807":true,"808":true,"809":true,"810":true,"811":true,"866":true,"867":true,"868":true,"869":true,"870":true,"871":true,"926":true,"927":true,"928":true,"929":true,"930":true,"931":true,"986":true,"987":true,"988":true,"989":true,"990":true,"991":true,"1045":true,"1046":true,"1047":true,"1048":true,"1049":true,"1050":true,"1051":true,"1105":true,"1106":true,"1107":true,"1108":true,"1110":true,"1165":true,"1166":true,"1167":true,"1168":true,"1169":true,"1226":true,"1227":true}],
        capital: 0
    },
    sweden: {
        points: [{"278":true,"336":true,"337":true,"338":true,"339":true,"395":true,"396":true,"397":true,"398":true,"399":true,"455":true,"456":true,"457":true,"458":true,"459":true,"514":true,"515":true,"516":true,"517":true,"518":true,"519":true,"574":true,"575":true,"576":true,"577":true,"578":true,"633":true,"634":true,"635":true,"636":true,"637":true,"638":true,"693":true,"694":true,"695":true,"696":true,"697":true,"698":true,"752":true,"753":true,"754":true,"755":true,"756":true,"757":true,"812":true,"813":true,"814":true,"815":true,"816":true,"872":true,"873":true,"874":true,"875":true,"932":true,"933":true,"934":true,"935":true,"992":true,"993":true,"994":true,"995":true,"1051":true,"1052":true,"1053":true,"1054":true,"1055":true,"1111":true,"1112":true,"1113":true,"1114":true,"1115":true,"1116":true,"1170":true,"1171":true,"1172":true,"1173":true,"1174":true,"1176":true,"1230":true,"1231":true,"1232":true,"1233":true,"1234":true,"1290":true,"1291":true,"1292":true,"1293":true,"1294":true,"1297":true,"1351":true,"1352":true,"1353":true,"1354":true,"1356":true,"1411":true,"1412":true,"1413":true,"1414":true,"1416":true,"1471":true,"1472":true,"1473":true,"1531":true,"1532":true}],
        capital: 0
    },
    finnland: {
        points: [{"161":true,"162":true,"221":true,"222":true,"279":true,"280":true,"281":true,"282":true,"340":true,"341":true,"342":true,"343":true,"400":true,"401":true,"402":true,"460":true,"461":true,"462":true,"463":true,"520":true,"521":true,"522":true,"523":true,"524":true,"581":true,"582":true,"583":true,"584":true,"641":true,"642":true,"643":true,"644":true,"700":true,"701":true,"702":true,"703":true,"704":true,"760":true,"761":true,"762":true,"763":true,"764":true,"765":true,"819":true,"820":true,"821":true,"822":true,"823":true,"824":true,"825":true,"878":true,"879":true,"880":true,"881":true,"882":true,"883":true,"884":true,"885":true,"938":true,"939":true,"940":true,"941":true,"942":true,"943":true,"944":true,"999":true,"1000":true,"1001":true,"1002":true,"1003":true,"1004":true,"1059":true,"1060":true,"1062":true,"1120":true}],
        capital: 0
    },
    estonia: {
        points: [{"1182":true,"1183":true,"1184":true,"1239":true,"1240":true,"1241":true,"1242":true,"1243":true,"1300":true,"1301":true,"1302":true,"1303":true}],
        capital: 0
    },
    latvia: {
        points: [{"1359":true,"1361":true,"1362":true,"1363":true,"1364":true,"1419":true,"1420":true,"1422":true,"1423":true,"1424":true,"1478":true,"1479":true,"1480":true,"1482":true,"1483":true,"1484":true,"1485":true}],
        capital: 0
    },
    lithuania: {
        points: [{"1538":true,"1539":true,"1540":true,"1541":true,"1542":true,"1543":true,"1599":true,"1600":true,"1601":true,"1602":true,"1603":true,"1658":true,"1659":true,"1660":true,"1661":true,"1662":true,"1721":true}],
        capital: 0
    },
    belorussia: {
        points: [{"1544":true,"1545":true,"1546":true,"1547":true,"1604":true,"1605":true,"1606":true,"1607":true,"1664":true,"1665":true,"1666":true,"1667":true,"1668":true,"1722":true,"1723":true,"1724":true,"1726":true,"1727":true,"1728":true,"1729":true,"1782":true,"1783":true,"1784":true,"1785":true,"1786":true,"1787":true,"1788":true,"1842":true,"1843":true,"1844":true,"1845":true,"1846":true,"1847":true,"1848":true,"1901":true,"1902":true,"1903":true,"1904":true,"1905":true,"1906":true,"1907":true,"1908":true}],
        capital: 0
    },
    poland: {
        points: [{"1655":true,"1712":true,"1713":true,"1714":true,"1715":true,"1716":true,"1717":true,"1718":true,"1719":true,"1720":true,"1772":true,"1773":true,"1774":true,"1775":true,"1776":true,"1777":true,"1778":true,"1779":true,"1780":true,"1781":true,"1832":true,"1833":true,"1834":true,"1835":true,"1836":true,"1837":true,"1838":true,"1839":true,"1840":true,"1841":true,"1893":true,"1894":true,"1895":true,"1896":true,"1897":true,"1898":true,"1900":true,"1953":true,"1954":true,"1955":true,"1956":true,"1957":true,"1958":true,"1959":true,"1960":true,"1961":true,"2012":true,"2013":true,"2014":true,"2015":true,"2016":true,"2017":true,"2018":true,"2019":true,"2020":true,"2021":true,"2074":true,"2075":true,"2076":true,"2077":true,"2078":true,"2079":true,"2080":true,"2081":true,"2136":true,"2137":true,"2138":true,"2139":true,"2140":true,"2200":true}],
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