//csúnya a kód sajnos, de prímszámok :)))


function PrimszamE(vizsgaltSzam) {
    const negyzetgyok = Math.sqrt(vizsgaltSzam);
    let i = 2;
    while (i < negyzetgyok && vizsgaltSzam % i != 0) {
        i++;
    }
    if (!(i > negyzetgyok)) {
        return false;

    } else {
        return true;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const szamoljButton = document.getElementById("szamolj");
    const meddigErtek = document.getElementById("meddig");
    const kimenetSzoveg = document.getElementById("primszamok");
    szamoljButton.addEventListener("click", () =>
    {
        event.preventDefault();
        console.log("alami történt");
        for(i = 1; i <= meddigErtek.value; i++){
            if(PrimszamE(i)){
                console.log(i);
                kimenetSzoveg.textContent = kimenetSzoveg.textContent + ", " + i;                
            }
        }
    })    
})