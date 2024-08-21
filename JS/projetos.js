let projetos = document.getElementById("projetos")
let userName = "EdersonHTT"



fetch(`https://api.github.com/users/${userName}/repos`)
.then(response => response.json())

.then(data => {
    data.forEach(repo => {
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let a = document.createElement("a")

        h3.textContent = repo.name
        p.textContent = repo.description || `Sem Descrição`
        a.href = repo.html_url
        a.textContent = "Ver Repositório"

        projetos.appendChild(div)

        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(a)
        
        a.target = "_blank"
        
    })  
})
.catch(error => console.error("Erro ao carregar os repositórios: " + error))

