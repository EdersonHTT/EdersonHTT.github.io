let section = document.getElementById("githubProjetos")
let userName = "EdersonHTT"

fetch(`https://api.github.com/users/${userName}/repos`)
.then 