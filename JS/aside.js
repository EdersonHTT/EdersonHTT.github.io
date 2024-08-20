
let aside = document.querySelector("aside");
let ul = document.getElementById("lista");
let display = window.getComputedStyle(aside);
let main = document.getElementById("main");
let img = document.createElement("img");
let menu = document.createElement("div");
let triangulo = document.createElement("div")

triangulo.id = "tri"

menu.appendChild(img).src = "./IMG/menu.png"

menu.id = "menu";

let lista = document.querySelector("ul");


window.addEventListener("resize", ()=>{
    if(display.getPropertyValue("display") === "none"){

        main.appendChild(menu)

    }else{

        main.removeChild(menu).src = "./IMG/menu.png"

    }
})

let click = 0

menu.addEventListener("click", ()=>{
    lista.appendChild(triangulo)
    menu.appendChild(lista)
    lista.id = "listaMenu"

    click++
    if(click === 2){
        menu.removeChild(lista)
        click = 0
    }
})