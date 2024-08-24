function resize(){
    if(display.getPropertyValue("display") === "none"){

        body.appendChild(menu)

    }else{
        if(document.getElementById("menu")){
            
            body.removeChild(menu).src = "./IMG/menu.png"

            if(!document.getElementById("lista")){
                if(click === 1){
                    lista.removeChild(triangulo)
                    click = 0
                    
                }
                aside.appendChild(lista)
                lista.id = "lista"

            }
            lista.id = "lista"
            
        }
    }
}

let aside = document.querySelector("aside");
let display = window.getComputedStyle(aside);
let body = document.querySelector("body");
let img = document.createElement("img");
let menu = document.createElement("div");
let triangulo = document.createElement("div")

triangulo.id = "tri"

menu.appendChild(img).src = "./IMG/menu.png"

menu.id = "menu";

let lista = document.querySelector("ul");

window.addEventListener("resize", resize)

let click = 0

img.addEventListener("click", ()=>{
    click++
    if(click === 1){
        menu.appendChild(lista)
        lista.appendChild(triangulo)
        lista.id = "listaMenu";
        menu.style.backgroundColor = "white"
        
        setTimeout(() => {
            menu.style.backgroundColor = "rgb(177, 85, 0)"
        }, 100);
    }

    document.querySelector("#l1").addEventListener("mouseenter", ()=>{
        triangulo.style.backgroundColor = "white"
        document.querySelector("#l1").style.backgroundColor = "white"
        document.querySelector("#l1").style.color = "rgb(37, 9, 0)"
    })

    document.querySelector("#l1").addEventListener("mouseleave", ()=>{
        triangulo.style.backgroundColor = "rgb(177, 85, 0)"
        document.querySelector("#l1").style.backgroundColor = "rgb(177, 85, 0)"
        document.querySelector("#l1").style.color = "white"
    })

    if(click === 2){
        menu.style.backgroundColor = "white"
        
        setTimeout(() => {
            menu.style.backgroundColor = "rgb(177, 85, 0)"
        }, 100);

        lista.removeChild(triangulo)
        menu.removeChild(lista)
        lista.id = "lista"

        click = 0
    }
})

document.querySelector("main").addEventListener("click", ()=>{
    if(document.querySelector("#listaMenu")){
        menu.style.backgroundColor = "white"
        
        setTimeout(() => {
            menu.style.backgroundColor = "rgb(177, 85, 0)"
        }, 100);

        lista.removeChild(triangulo)
        menu.removeChild(lista)
        lista.id = "lista"

        click = 0
    }
})

window.addEventListener("load", ()=>{
    if(window.screen.width  <= 666){
    resize()
    }
})