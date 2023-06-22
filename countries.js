const countries = {
    ireland: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1271, 1272, 1329, 1330, 1331, 1389, 1390, 1391, 1392, 1449, 1450, 1451, 1508, 1509, 1510, 1511, 1512, 1568, 1569, 1570, 1571],
        capital: 1452,
        isOther: false,
        data: {
            2011: {
                oil: 0.3,
                gas: 0.17,
                coal: 0.08,
                nuclear: 0,
                water: 0.01,
                renewable: 0.05
            },
            2016: {
                oil: 0.31,
                gas: 0.18,
                coal: 0.09,
                nuclear: 0,
                water: 0.01,
                renewable: 0.07
            },
            2021: {
                oil: 0.28,
                gas: 0.18,
                coal: 0.05,
                nuclear: 0,
                water: 0.01,
                renewable: 0.11
            }
        }
    },
    unitedKingdom: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [920, 980, 1034, 1036, 1037, 1038, 1093, 1095, 1096, 1097, 1155, 1156, 1157, 1158, 1215, 1216, 1217, 1218, 1274, 1275, 1276, 1332, 1333, 1335, 1336, 1337, 1393, 1395, 1396, 1397, 1456, 1457, 1514, 1516, 1517, 1574, 1575, 1576, 1577, 1632, 1633, 1634, 1635, 1636, 1637, 1694, 1695, 1696, 1697, 1698, 1699, 1752, 1753, 1754, 1755, 1756, 1758, 1811, 1812, 1813, 1814, 1815, 1816, 1817],
        capital: 1757,
        isOther: false,
        data: {
            2011: {
                oil: 3.14,
                gas: 2.95,
                coal: 1.32,
                nuclear: 0.66,
                water: 0.06,
                renewable: 0.36
            },
            2016: {
                oil: 3.18,
                gas: 2.9,
                coal: 0.46,
                nuclear: 0.66,
                water: 0.07,
                renewable: 0.84
            },
            2021: {
                oil: 2.5,
                gas: 2.77,
                coal: 0.21,
                nuclear: 0.41,
                water: 0.05,
                renewable: 1.24
            }
        }
    },
    portugal: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2523, 2524, 2583, 2584, 2585, 2642, 2643, 2644, 2701, 2702, 2703, 2761, 2762, 2763, 2822, 2881, 2882, 2940, 2941, 2942],
        capital: 2821,
        isOther: false,
        data: {
            2011: {
                oil: 0.51,
                gas: 0.19,
                coal: 0.09,
                nuclear: 0,
                water: 0.11,
                renewable: 0.14
            },
            2016: {
                oil: 0.49,
                gas: 0.18,
                coal: 0.12,
                nuclear: 0,
                water: 0.15,
                renewable: 0.18
            },
            2021: {
                oil: 0.42,
                gas: 0.21,
                coal: 0.01,
                nuclear: 0,
                water: 0.11,
                renewable: 0.2
            }
        }
    },
    spain: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2344, 2345, 2403, 2404, 2405, 2406, 2407, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2764, 2765, 2766, 2767, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2955, 2957, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3014, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3124, 3127, 3128],
        capital: 2768,
        isOther: false,
        data: {
            2011: {
                oil: 2.81,
                gas: 1.21,
                coal: 0.54,
                nuclear: 0.55,
                water: 0.3,
                renewable: 0.63
            },
            2016: {
                oil: 2.63,
                gas: 1.05,
                coal: 0.44,
                nuclear: 0.54,
                water: 0.35,
                renewable: 0.71
            },
            2021: {
                oil: 2.45,
                gas: 1.22,
                coal: 0.16,
                nuclear: 0.51,
                water: 0.28,
                renewable: 0.97
            }
        }
    },
    france: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1879, 1934, 1935, 1938, 1939, 1940, 1991, 1992, 1993, 1995, 1996, 1997, 1998, 1999, 2000, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2113, 2114, 2115, 2116, 2117, 2118, 2120, 2121, 2122, 2123, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2655, 2656, 2657, 2660, 2661, 2662, 2716, 2717],
        capital: 2119,
        isOther: false,
        data: {
            2011: {
                oil: 3.45,
                gas: 1.55,
                coal: 0.41,
                nuclear: 4.22,
                water: 0.44,
                renewable: 0.3
            },
            2016: {
                oil: 3.17,
                gas: 1.6,
                coal: 0.35,
                nuclear: 3.73,
                water: 0.58,
                renewable: 0.51
            },
            2021: {
                oil: 2.91,
                gas: 1.55,
                coal: 0.23,
                nuclear: 3.43,
                water: 0.55,
                renewable: 0.74
            }
        }
    },
    belgium: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1880, 1881, 1882, 1942, 2001, 2002, 2062],
        capital: 1941,
        isOther: false,
        data: {
            2011: {
                oil: 1.29,
                gas: 0.59,
                coal: 0.15,
                nuclear: 0.46,
                water: -1,
                renewable: 0.1
            },
            2016: {
                oil: 1.32,
                gas: 0.58,
                coal: 0.13,
                nuclear: 0.4,
                water: -1,
                renewable: 0.16
            },
            2021: {
                oil: 1.3,
                gas: 0.61,
                coal: 0.1,
                nuclear: 0.46,
                water: -1,
                renewable: 0.25
            }
        }
    },
    netherlands: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1703, 1704, 1762, 1763, 1764, 1821, 1823, 1824, 1883, 1943],
        capital: 1822,
        isOther: false,
        data: {
            2011: {
                oil: 1.97,
                gas: 1.47,
                coal: 0.31,
                nuclear: 0.04,
                water: -1,
                renewable: 0.15
            },
            2016: {
                oil: 1.71,
                gas: 1.27,
                coal: 0.43,
                nuclear: 0.04,
                water: -1,
                renewable: 0.17
            },
            2021: {
                oil: 1.51,
                gas: 1.26,
                coal: 0.23,
                nuclear: 0.03,
                water: -1,
                renewable: 0.43
            }
        }
    },
    switzerland: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2303, 2304, 2305, 2362, 2364, 2365, 2366, 2423, 2425],
        capital: 2363,
        isOther: false,
        data: {
            2011: {
                oil: 0.48,
                gas: 0.11,
                coal: 0.01,
                nuclear: 0.26,
                water: 0.32,
                renewable: 0.02
            },
            2016: {
                oil: 0.44,
                gas: 0.13,
                coal: -1,
                nuclear: 0.2,
                water: 0.33,
                renewable: 0.04
            },
            2021: {
                oil: 0.37,
                gas: 0.13,
                coal: -1,
                nuclear: 0.17,
                water: 0.34,
                renewable: 0.06
            }
        }
    },
    italy: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2424, 2426, 2427, 2428, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2543, 2544, 2545, 2546, 2547, 2548, 2603, 2605, 2606, 2607, 2608, 2666, 2667, 2668, 2726, 2727, 2728, 2729, 2784, 2787, 2788, 2789, 2844, 2848, 2849, 2850, 2910, 2911, 2912, 2963, 2964, 2970, 2971, 2972, 2973, 3023, 3024, 3031, 3032, 3033, 3034, 3083, 3084, 3092, 3093, 3095, 3143, 3152, 3153, 3213, 3268, 3269, 3270, 3271, 3272, 3329, 3330, 3331, 3390, 3391],
        capital: 2909,
        isOther: false,
        data: {
            2011: {
                oil: 2.98,
                gas: 2.67,
                coal: 0.64,
                nuclear: 0,
                water: 0.46,
                renewable: 0.44
            },
            2016: {
                oil: 2.54,
                gas: 2.43,
                coal: 0.46,
                nuclear: 0,
                water: 0.39,
                renewable: 0.72
            },
            2021: {
                oil: 2.35,
                gas: 2.61,
                coal: 0.23,
                nuclear: 0,
                water: 0.41,
                renewable: 0.76
            }
        }
    },
    germany: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1587, 1647, 1648, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1884, 1885, 1886, 1887, 1888, 1889, 1891, 1892, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2124, 2125, 2126, 2127, 2128, 2129, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2306, 2307, 2308],
        capital: 1890,
        isOther: false,
        data: {
            2011: {
                oil: 4.73,
                gas: 2.91,
                coal: 3.28,
                nuclear: 1.03,
                water: 0.18,
                renewable: 1.24
            },
            2016: {
                oil: 4.76,
                gas: 3.06,
                coal: 3.2,
                nuclear: 0.78,
                water: 0.2,
                renewable: 1.82
            },
            2021: {
                oil: 4.18,
                gas: 3.26,
                coal: 2.12,
                nuclear: 0.62,
                water: 0.18,
                renewable: 2.28
            }
        }
    },
    denmark: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1348, 1407, 1408, 1467, 1468, 1527, 1528, 1589],
        capital: 1529,
        isOther: false,
        data: {
            2011: {
                oil: 0.35,
                gas: 0.16,
                coal: 0.14,
                nuclear: 0,
                water: -1,
                renewable: 0.15
            },
            2016: {
                oil: 0.32,
                gas: 0.12,
                coal: 0.09,
                nuclear: 0,
                water: -1,
                renewable: 0.2
            },
            2021: {
                oil: 0.27,
                gas: 0.08,
                coal: 0.05,
                nuclear: 0,
                water: -1,
                renewable: 0.27
            }
        }
    },
    norway: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [41, 42, 100, 101, 102, 103, 157, 158, 159, 160, 216, 217, 218, 219, 220, 276, 277, 335, 394, 454, 513, 572, 573, 631, 632, 690, 691, 692, 749, 750, 751, 807, 808, 809, 810, 811, 866, 867, 868, 869, 870, 871, 926, 927, 928, 929, 930, 931, 986, 987, 988, 989, 990, 991, 1045, 1046, 1047, 1048, 1049, 1050, 1105, 1106, 1107, 1108, 1110, 1165, 1166, 1167, 1168, 1169, 1226, 1227],
        capital: 1109,
        isOther: false,
        data: {
            2011: {
                oil: 0.43,
                gas: 0.15,
                coal: 0.04,
                nuclear: 0,
                water: 1.19,
                renewable: 0.02
            },
            2016: {
                oil: 0.4,
                gas: 0.16,
                coal: 0.03,
                nuclear: 0,
                water: 1.37,
                renewable: 0.04
            },
            2021: {
                oil: 0.38,
                gas: 0.15,
                coal: 0.03,
                nuclear: 0,
                water: 1.35,
                renewable: 0.13
            }
        }
    },
    sweden: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [278, 336, 337, 338, 339, 395, 396, 397, 398, 399, 455, 456, 457, 458, 459, 514, 515, 516, 517, 518, 519, 574, 575, 576, 577, 578, 633, 634, 635, 636, 637, 638, 693, 694, 695, 696, 697, 698, 752, 753, 754, 755, 756, 757, 812, 813, 814, 815, 816, 872, 873, 874, 875, 932, 933, 934, 935, 992, 993, 994, 995, 1051, 1052, 1053, 1054, 1055, 1111, 1112, 1113, 1114, 1115, 1116, 1170, 1171, 1172, 1173, 1174, 1176, 1230, 1231, 1232, 1233, 1234, 1290, 1291, 1292, 1293, 1294, 1297, 1351, 1352, 1353, 1354, 1356, 1411, 1412, 1413, 1414, 1416, 1471, 1472, 1473, 1531, 1532],
        capital: 1175,
        isOther: false,
        data: {
            2011: {
                oil: 0.61,
                gas: 0.04,
                coal: 0.1,
                nuclear: 0.58,
                water: 0.67,
                renewable: 0.22
            },
            2016: {
                oil: 0.59,
                gas: 0.04,
                coal: 0.08,
                nuclear: 0.58,
                water: 0.6,
                renewable: 0.34
            },
            2021: {
                oil: 0.54,
                gas: 0.05,
                coal: 0.06,
                nuclear: 0.48,
                water: 0.67,
                renewable: 0.49
            }
        }
    },
    finland: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [161, 162, 221, 222, 279, 280, 281, 282, 340, 341, 342, 343, 400, 401, 402, 460, 461, 462, 463, 520, 521, 522, 523, 524, 581, 582, 583, 584, 641, 642, 643, 644, 700, 701, 702, 703, 704, 760, 761, 762, 763, 764, 765, 819, 820, 821, 822, 823, 824, 825, 878, 879, 880, 881, 882, 883, 884, 885, 938, 939, 940, 941, 942, 943, 944, 999, 1000, 1001, 1002, 1003, 1004, 1059, 1060, 1062, 1120],
        capital: 1061,
        isOther: false,
        data: {
            2011: {
                oil: 0.41,
                gas: 0.13,
                coal: 0.23,
                nuclear: 0.22,
                water: 0.12,
                renewable: 0.14
            },
            2016: {
                oil: 0.41,
                gas: 0.07,
                coal: 0.18,
                nuclear: 0.22,
                water: 0.15,
                renewable: 0.17
            },
            2021: {
                oil: 0.35,
                gas: 0.07,
                coal: 0.12,
                nuclear: 0.22,
                water: 0.15,
                renewable: 0.25
            }
        }
    },
    estonia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1182, 1183, 1184, 1239, 1240, 1241, 1242, 1243, 1300, 1301, 1302, 1303],
        capital: 1181,
        isOther: false,
        data: {
            2011: {
                oil: 0.06,
                gas: 0.02,
                coal: 0.17,
                nuclear: 0,
                water: -1,
                renewable: 0.01
            },
            2016: {
                oil: 0.06,
                gas: 0.02,
                coal: 0.16,
                nuclear: 0,
                water: -1,
                renewable: 0.02
            },
            2021: {
                oil: 0.06,
                gas: 0.02,
                coal: 0.12,
                nuclear: 0,
                water: -1,
                renewable: 0.04
            }
        }
    },
    latvia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1359, 1361, 1362, 1363, 1364, 1419, 1420, 1422, 1423, 1424, 1478, 1479, 1480, 1482, 1483, 1484, 1485],
        capital: 1481,
        isOther: false,
        data: {
            2011: {
                oil: 0.07,
                gas: 0.05,
                coal: -1,
                nuclear: 0,
                water: 0.03,
                renewable: -1
            },
            2016: {
                oil: 0.08,
                gas: 0.05,
                coal: -1,
                nuclear: 0,
                water: 0.02,
                renewable: 0.01
            },
            2021: {
                oil: 0.07,
                gas: 0.04,
                coal: -1,
                nuclear: 0,
                water: 0.03,
                renewable: 0.01
            }
        }
    },
    lithuania: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1538, 1539, 1540, 1541, 1542, 1543, 1599, 1600, 1601, 1602, 1603, 1658, 1659, 1660, 1661, 1662, 1721],
        capital: 1663,
        isOther: false,
        data: {
            2011: {
                oil: 0.11,
                gas: 0.11,
                coal: 0.01,
                nuclear: 0,
                water: -1,
                renewable: 0.01
            },
            2016: {
                oil: 0.13,
                gas: 0.08,
                coal: 0.01,
                nuclear: 0,
                water: -1,
                renewable: 0.02
            },
            2021: {
                oil: 0.14,
                gas: 0.08,
                coal: 0.01,
                nuclear: 0,
                water: -1,
                renewable: 0.03
            }
        }
    },
    belorussia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1544, 1545, 1546, 1547, 1604, 1605, 1606, 1607, 1664, 1665, 1666, 1667, 1668, 1722, 1723, 1724, 1726, 1727, 1728, 1729, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908],
        capital: 1725,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    },
    poland: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1655, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1893, 1894, 1895, 1896, 1897, 1898, 1900, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2136, 2137, 2138, 2139, 2140, 2200],
        capital: 1899,
        isOther: false,
        data: {
            2011: {
                oil: 1.16,
                gas: 0.59,
                coal: 2.3,
                nuclear: 0,
                water: 0.02,
                renewable: 0.15
            },
            2016: {
                oil: 1.2,
                gas: 0.66,
                coal: 2.07,
                nuclear: 0,
                water: 0.02,
                renewable: 0.23
            },
            2021: {
                oil: 1.38,
                gas: 0.84,
                coal: 1.88,
                nuclear: 0,
                water: 0.02,
                renewable: 0.32
            }
        }
    },
    czechRepublic: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2012, 2070, 2071, 2072, 2073, 2130, 2131, 2133, 2134, 2135, 2191, 2192, 2193, 2194, 2195],
        capital: 2132,
        isOther: false,
        data: {
            2011: {
                oil: 0.39,
                gas: 0.29,
                coal: 0.77,
                nuclear: 0.27,
                water: 0.02,
                renewable: 0.07
            },
            2016: {
                oil: 0.35,
                gas: 0.29,
                coal: 0.69,
                nuclear: 0.22,
                water: 0.02,
                renewable: 0.09
            },
            2021: {
                oil: 0.41,
                gas: 0.33,
                coal: 0.54,
                nuclear: 0.28,
                water: 0.02,
                renewable: 0.1
            }
        }
    },
    austria: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2251, 2252, 2253, 2310, 2311, 2312, 2314, 2369, 2370, 2371, 2372, 2373, 2430, 2431],
        capital: 2313,
        isOther: false,
        data: {
            2011: {
                oil: 0.51,
                gas: 0.33,
                coal: 0.15,
                nuclear: 0,
                water: 0.34,
                renewable: 0.1
            },
            2016: {
                oil: 0.52,
                gas: 0.3,
                coal: 0.13,
                nuclear: 0,
                water: 0.39,
                renewable: 0.14
            },
            2021: {
                oil: 0.49,
                gas: 0.32,
                coal: 0.11,
                nuclear: 0,
                water: 0.4,
                renewable: 0.15
            }
        }
    },
    slovenia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2432, 2433, 2490, 2492],
        capital: 2491,
        isOther: false,
        data: {
            2011: {
                oil: 0.11,
                gas: 0.03,
                coal: 0.06,
                nuclear: 0.06,
                water: 0.04,
                renewable: 0.01
            },
            2016: {
                oil: 0.11,
                gas: 0.03,
                coal: 0.05,
                nuclear: 0.05,
                water: 0.04,
                renewable: 0.01
            },
            2021: {
                oil: 0.1,
                gas: 0.03,
                coal: 0.03,
                nuclear: 0.05,
                water: 0.04,
                renewable: 0.01
            }
        }
    },
    croatia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2493, 2494, 2550, 2551, 2552, 2554, 2555, 2612, 2616, 2672, 2733],
        capital: 2553,
        isOther: false,
        data: {
            2011: {
                oil: 0.15,
                gas: 0.11,
                coal: 0.03,
                nuclear: 0,
                water: 0.05,
                renewable: -1
            },
            2016: {
                oil: 0.14,
                gas: 0.1,
                coal: 0.03,
                nuclear: 0,
                water: 0.07,
                renewable: 0.02
            },
            2021: {
                oil: 0.13,
                gas: 0.1,
                coal: 0.02,
                nuclear: 0,
                water: 0.07,
                renewable: 0.04
            }
        }
    },
    bosnia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2613, 2614, 2615, 2673, 2674, 2675, 2676, 2734, 2735, 2795, 2796],
        capital: 2736,
        isOther: true,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    },
    serbia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2556, 2557, 2558, 2617, 2618, 2619, 2677, 2679, 2680, 2737, 2738, 2739, 2740, 2797, 2799, 2800, 2801, 2860],
        capital: 2678,
        isOther: true,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    },
    ukraine: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [1850, 1851, 1909, 1910, 1911, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1976, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2260, 2261, 2262, 2263, 2264, 2265, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2321, 2322, 2323, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2389, 2390, 2391, 2392, 2393, 2394, 2448, 2449, 2453, 2454, 2456, 2508, 2512, 2513, 2514, 2515, 2573],
        capital: 2089,
        isOther: false,
        data: {
            2011: {
                oil: 0.58,
                gas: 2.02,
                coal: 1.74,
                nuclear: 0.86,
                water: 0.11,
                renewable: -1
            },
            2016: {
                oil: 0.45,
                gas: 1.13,
                coal: 1.36,
                nuclear: 0.75,
                water: 0.07,
                renewable: 0.02
            },
            2021: {
                oil: 0.46,
                gas: 0.94,
                coal: 0.95,
                nuclear: 0.78,
                water: 0.1,
                renewable: 0.11
            }
        }
    },
    slovakia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2196, 2197, 2198, 2199, 2254, 2255, 2256, 2257, 2258, 2259, 2316],
        capital: 2315,
        isOther: false,
        data: {
            2011: {
                oil: 0.16,
                gas: 0.19,
                coal: 0.15,
                nuclear: 0.15,
                water: 0.04,
                renewable: 0.02
            },
            2016: {
                oil: 0.16,
                gas: 0.16,
                coal: 0.13,
                nuclear: 0.14,
                water: 0.04,
                renewable: 0.03
            },
            2021: {
                oil: 0.18,
                gas: 0.19,
                coal: 0.12,
                nuclear: 0.14,
                water: 0.04,
                renewable: 0.04
            }
        }
    },
    hungary: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2317, 2318, 2319, 2320, 2374, 2375, 2376, 2377, 2378, 2379, 2434, 2435, 2436, 2438, 2495, 2496, 2497, 2498],
        capital: 2437,
        isOther: false,
        data: {
            2011: {
                oil: 0.28,
                gas: 0.39,
                coal: 0.11,
                nuclear: 0.15,
                water: -1,
                renewable: 0.03
            },
            2016: {
                oil: 0.3,
                gas: 0.34,
                coal: 0.09,
                nuclear: 0.15,
                water: -1,
                renewable: 0.04
            },
            2021: {
                oil: 0.34,
                gas: 0.39,
                coal: 0.06,
                nuclear: 0.14,
                water: -1,
                renewable: 0.08
            }
        }
    },
    romania: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2324, 2325, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2681, 2682, 2683, 2684, 2686, 2687],
        capital: 2685,
        isOther: false,
        data: {
            2011: {
                oil: 0.38,
                gas: 0.46,
                coal: 0.34,
                nuclear: 0.11,
                water: 0.15,
                renewable: 0.02
            },
            2016: {
                oil: 0.4,
                gas: 0.38,
                coal: 0.22,
                nuclear: 0.1,
                water: 0.17,
                renewable: 0.1
            },
            2021: {
                oil: 0.46,
                gas: 0.41,
                coal: 0.17,
                nuclear: 0.1,
                water: 0.16,
                renewable: 0.1
            }
        }
    },
    moldavia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2266, 2326, 2327, 2388, 2447, 2507],
        capital: 2387,
        isOther: true,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    },
    bulgaria: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2686, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2802, 2803, 2804, 2805, 2806, 2861, 2863, 2864, 2865, 2866, 2867, 2922, 2923, 2924],
        capital: 2862,
        isOther: false,
        data: {
            2011: {
                oil: 0.16,
                gas: 0.11,
                coal: 0.34,
                nuclear: 0.16,
                water: 0.03,
                renewable: 0.01
            },
            2016: {
                oil: 0.19,
                gas: 0.11,
                coal: 0.24,
                nuclear: 0.15,
                water: 0.04,
                renewable: 0.04
            },
            2021: {
                oil: 0.2,
                gas: 0.12,
                coal: 0.22,
                nuclear: 0.15,
                water: 0.04,
                renewable: 0.06
            }
        }
    },
    greece: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2925, 2981, 2982, 2983, 2984, 2985, 3039, 3040, 3041, 3042, 3043, 3098, 3099, 3100, 3102, 3104, 3157, 3158, 3159, 3160, 3161, 3165, 3218, 3219, 3220, 3221, 3279, 3280, 3281, 3282, 3283, 3285, 3339, 3340, 3341, 3344, 3400, 3401, 3405, 3406, 3461, 3468, 3527, 3583, 3584, 3585],
        capital: 3343,
        isOther: false,
        data: {
            2011: {
                oil: 0.74,
                gas: 0.17,
                coal: 0.33,
                nuclear: 0,
                water: 0.04,
                renewable: 0.05
            },
            2016: {
                oil: 0.61,
                gas: 0.14,
                coal: 0.18,
                nuclear: 0,
                water: 0.05,
                renewable: 0.1
            },
            2021: {
                oil: 0.52,
                gas: 0.25,
                coal: 0.07,
                nuclear: 0,
                water: 0.05,
                renewable: 0.16
            }
        }
    },
    macedonia: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2919, 2920, 2921, 2978, 2980],
        capital: 2979,
        isOther: false,
        data: {
            2011: {
                oil: 0.04,
                gas: -1,
                coal: 0.06,
                nuclear: 0,
                water: 0.01,
                renewable: -1
            },
            2016: {
                oil: 0.05,
                gas: 0.01,
                coal: 0.04,
                nuclear: 0,
                water: 0.02,
                renewable: -1
            },
            2021: {
                oil: 0.05,
                gas: 0.01,
                coal: 0.03,
                nuclear: 0,
                water: 0.01,
                renewable: -1
            }
        }
    },
    albania: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2917, 2918, 2977, 3038, 3097],
        capital: 3037,
        isOther: true,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    },
    montenegro: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2856],
        capital: 2916,
        isOther: true,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    },
    kosovo: {
        residents: 0,
        bip: 0,
        hdi: 0,
        points: [2798, 2858],
        capital: 2859,
        isOther: true,
        data: {
            2011: {
                oil: 0.69,
                gas: 0.15,
                coal: 0.66,
                nuclear: 0,
                water: 0.27,
                renewable: -1
            },
            2016: {
                oil: 0.7,
                gas: 0.17,
                coal: 0.6,
                nuclear: 0,
                water: 0.34,
                renewable: -1
            },
            2021: {
                oil: 0.69,
                gas: 0.22,
                coal: 0.31,
                nuclear: 0,
                water: 0.37,
                renewable: 0.03
            }
        }
    }
}

// -1 ist das kreuz (< 0.005 Exajoules)
// 0 ist der Strich bzw keine Angabe

function checkForDuplicates() {
    const points = {};
    Object.entries(countries).forEach(c => {
        c[1].points.forEach(p => {
            if (!points[p]) {
                points[p] = true;
            } else {
                console.log(p);
            }
        })
    })
}