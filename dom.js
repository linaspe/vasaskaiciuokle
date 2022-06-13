let dropdown = document.getElementById("statinio-tipas");

for (let i = 1; i < objektoTipas.length; ++i) {
    dropdown[dropdown.length] = new Option(objektoTipas[i].t, i.toString());

}


let forma = document.getElementById('myForm')

forma.addEventListener("submit", skaiciuoti)


function skaiciuoti(a) {

    a.preventDefault();

    let plotas = document.getElementById("plotas")


    let fiksuotaDalis = calc_first_part(Number(plotas.value), Number(dropdown.value))
    let kintamaDalis = calc_second_part(Number(plotas.value), Number(dropdown.value))
    let visaRinkliava = (kintamaDalis + fiksuotaDalis).toFixed(2)

    let rodytikintama = document.getElementById("kintama-dalis");
    let rodytipastovia = document.getElementById("pastovioji-dalis");
    let rodytisuma = document.getElementById("rinkliavos-suma");

    rodytipastovia.innerHTML = "Pastovioji dalis <strong> " + fiksuotaDalis + " EUR<\strong>";
    rodytikintama.innerHTML = "Kintamoji dalis <strong> " + kintamaDalis + " EUR<\strong>";
    rodytisuma.innerHTML = "Rinkliavos suma <strong> " + visaRinkliava + " EUR<\strong>"


}



