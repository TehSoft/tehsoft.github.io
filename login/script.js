function strToHexa(szoveg) {
    let hex = '';
    for (let i = 0; i < szoveg.length; i++) {
        hex += szoveg.charCodeAt(i).toString(16);
    }
    return hex;
}

const adatbazis = {
    "3230313330313131": "HSebi",
    "70617373776f726c64": "Cacaoway",
    "61646d696e4031315f4c": "Radminl01"
};

function bejelentkezes() {
    const beirtKod = document.getElementById("kodInput").value;
    const beirtHexa = strToHexa(beirtKod);

    if (adatbazis.hasOwnProperty(beirtHexa)) {
        const felhasznaloNeve = adatbazis[beirtHexa];
        localStorage.setItem("bejelentkezettFelhasznalo", felhasznaloNeve);
        document.getElementById("loginFormSzekcio").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        document.getElementById("aktivUser").innerText = felhasznaloNeve;
    } else {
        alert("Hibás vagy ismeretlen kód!");
    }
}

window.onload = function() {
    const elmentettNev = localStorage.getItem("bejelentkezettFelhasznalo");
    if (elmentettNev) {
        document.getElementById("loginFormSzekcio").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        document.getElementById("aktivUser").innerText = elmentettNev;
    }
};

function kijelentkezes() {
    localStorage.removeItem("bejelentkezettFelhasznalo");
    location.reload();
}
