
let aside = document.querySelector("aside");
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
        if(document.getElementById("menu")){
            
            main.removeChild(menu).src = "./IMG/menu.png"
           

            if(!document.getElementById("lista")){
                if(click === 1){
                    menu.removeChild(triangulo)
                    click = 0
                }
                aside.appendChild(lista)
                lista.id = "lista"

            }
            lista.id = "lista"
        }
    }
})

let click = 0

img.addEventListener("click", ()=>{
    click++
    if(click === 1){
        menu.appendChild(lista)
        menu.appendChild(triangulo)
        lista.id = "listaMenu";
    }
    if(click === 2){

        menu.removeChild(triangulo)
        menu.removeChild(lista)
        lista.id = "lista"
        click = 0
    }
})