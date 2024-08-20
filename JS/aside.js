
let aside = document.querySelector("aside");
let ul = document.getElementById("lista");

let display = window.getComputedStyle(aside)

let main = document.getElementById("main")

let menu = document.createElement("img");

menu.id = "menu"

setInterval(()=>{
    if(display.getPropertyValue("display") === "none"){
    
        main.appendChild(menu).src = "./IMG/menu.png"
    }else{
        main.removeChild(menu).src = "./IMG/menu.png"
    }
    return
}, 200)

menu.addEventListener("click", ()=>{
    lista = document.createElement("div")
    lista.id = "listaMenu"
    menu.appendChild(lista)
})