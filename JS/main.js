function escolha (){
        sobreMim.style.display = "none"
        formacao.style.display = "none"
        social.style.display = "none"
        objetivo.style.display = "flex"
}

let sobreMim = document.getElementById("sobreMim")
let objetivo = document.getElementById("objetivos")
let formacao = document.getElementById("formacao")
let github = document.getElementById("githubProjetos")
let social = document.getElementById("social")

const b1 = document.getElementById("l1")
const b2 = document.getElementById("l2")
const b3 = document.getElementById("l3")
const b4 = document.getElementById("l4")
const b5 = document.getElementById("l5")

b1.addEventListener("click", () =>{
    sobreMim.style.display = "flex"
    formacao.style.display = "none"
    github.style.display = "none"
    social.style.display = "none"
    objetivo.style.display = "none"
})

b2.addEventListener("click", () =>{
    sobreMim.style.display = "none"
    formacao.style.display = "none"
    social.style.display = "none"
    github.style.display = "none"
    objetivo.style.display = "flex"
})

b3.addEventListener("click", () =>{
    sobreMim.style.display = "none"
    formacao.style.display = "flex"
    social.style.display = "none"
    github.style.display = "none"
    objetivo.style.display = "none"
})

b4.addEventListener("click", () =>{
    sobreMim.style.display = "none"
    formacao.style.display = "none"
    social.style.display = "none"
    github.style.display = "flex"
    objetivo.style.display = "none"
})

b5.addEventListener("click", () =>{
    sobreMim.style.display = "none"
    formacao.style.display = "none"
    social.style.display = "flex"
    github.style.display = "none"
    objetivo.style.display = "none"
})

