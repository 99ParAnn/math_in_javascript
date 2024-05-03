// erre nem csinálok függvényt, mert a rekurzív hívás megöli az egész mindent Fibonacci-sorozatnál

document.addEventListener("DOMContentLoaded", ()=>
{
    const tablazat = document.getElementById("tablazat");
    const hanyDarabot = document.getElementById("meddig");
    const startGomb = document.getElementById("szamolj");
    startGomb.addEventListener("click", ()=>{
        event.preventDefault();
        let elozoSzam = 1
        let mostaniSzam = 1 
        let tmp
        for(i = 0; i<hanyDarabot.value; i++)
        {
            ujSor = "<tr><td>" + elozoSzam + "</td><td>" + mostaniSzam + "</td><td>" + mostaniSzam/elozoSzam + "</td></tr>"
            tablazat.innerHTML = tablazat.innerHTML + ujSor
            console.log(elozoSzam + mostaniSzam);
    
            tmp = elozoSzam + mostaniSzam;
            elozoSzam = mostaniSzam;
            mostaniSzam = tmp;
        }



    })

    
})