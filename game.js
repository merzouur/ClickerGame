//tableau du magasin
var heros = [
    // { id: 1, name: "Link", cost: 10, gps: 0.1, owned: 0 },
    { id: 0, name: "Link", cost: 10, gps: 1, owned: 0 },
    { id: 1, name: "samus", cost: 50, gps: 10, owned: 0 },
    { id: 2, name: "kirby", cost: 500, gps: 50, owned: 0 },
];

var golds = 0;
var gps = 0

// le chrono
const gpsInterval = setInterval(function() {
    increment();
    displayGolds();
}, 1000);


// dégat par click
function addGolds(gps) {
    golds += gps;
    displayGolds();
}

//affiche dégat totaux et dps
function displayGolds() {
    document.querySelector("#dt").innerHTML = concate(golds, "dégats totaux")
    getDPS()
    document.querySelector("#dps").innerHTML = concate(gps, "dps")
    document.querySelector("#dgl").innerHTML = concate(heros[0].owned, "%")
    document.querySelector("#dgs").innerHTML = concate(heros[1].owned, "%")
    document.querySelector("#dgk").innerHTML = concate(heros[2].owned, "%")
}



//affiche les choses
function concate(msg1, msg2) {
    const concate_msg = msg1 + " " + msg2;
    return (concate_msg);
}

function concate_bonus(msg1) {
    const concate_msg = msg1;
    return (concate_msg);
}


//incrémentation auto
function increment() {
    addGolds(gps);
    displayGolds();
}

//calcul dps
function getDPS() {
    gps = 0;
    heros.forEach(function(hero) {
        gps += hero.gps * hero.owned;

    })
}


//boutique
function getcharacss(id) {
    if (golds >= heros[id].cost) {
        golds -= heros[id].cost;
        heros[id].owned += 1;
        heros[id].cost *= 1.15;
        getDPS();

    };
}


//sauvegarder les données

function sav() {
    sav = JSON.stringify(heros);
    sav2 = JSON.stringify(golds);
    sav3 = JSON.stringify(gps);
    localStorage.setItem("clesav", sav);
    localStorage.setItem("clesav2", sav2);
    localStorage.setItem("clesav3", sav3)
}

//recuperer données 

function recup() {
    text = localStorage.getItem("clesav");
    text2 = localStorage.getItem("clesav2");
    text3 = localStorage.getItem("clesav3");
    obj = JSON.parse(text);
    obj2 = JSON.parse(text2);
    obj3 = JSON.parse(text3);
    heros = obj;
    golds = obj2;
    gps = obj3;
}