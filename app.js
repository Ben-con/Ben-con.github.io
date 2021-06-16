
const readMorePort = document.querySelector('.hidden-port')
const portfolio = document.querySelector("#port")
portfolio.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMorePort.classList.add('hidden-port')
    portfolio.classList.remove("less")
    portfolio.textContent = "Read More"
    }else{
    readMorePort.classList.remove('hidden-port')
    portfolio.classList.add("less")
    portfolio.textContent ="Read Less"
    }
    
    
})

const webApp = document.querySelector("#web-app")
const readMoreWeb = document.querySelector(".hidden-web")
webApp.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMoreWeb.classList.add('hidden-web')
    webApp.classList.remove("less")
    webApp.textContent = "Read More"
    }else{
    readMoreWeb.classList.remove('hidden-web')
    webApp.classList.add("less")
    webApp.textContent ="Read Less"
    }
    
    
})

const form = document.querySelector("#form")
const readMoreForm = document.querySelector(".hidden-form")
form.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMoreForm.classList.add('hidden-form')
    form.classList.remove("less")
    form.textContent = "Read More"
    }else{
    readMoreForm.classList.remove('hidden-form')
    form.classList.add("less")
    form.textContent ="Read Less"
    }
    
    
})

const emp = document.querySelector("#employee")
const readMoreEmp = document.querySelector(".hidden-dir")
emp.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMoreEmp.classList.add('hidden-dir')
    emp.classList.remove("less")
    emp.textContent = "Read More"
    }else{
    readMoreEmp.classList.remove('hidden-dir')
    emp.classList.add("less")
    emp.textContent ="Read Less"
    }
    
    
})

const game = document.querySelector("#game")
const readMoreGame = document.querySelector(".hidden-game")
game.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMoreGame.classList.add('hidden-game')
    game.classList.remove("less")
    game.textContent = "Read More"
    }else{
    readMoreGame.classList.remove('hidden-game')
    game.classList.add("less")
    game.textContent ="Read Less"
    }
    
    
})

const gal = document.querySelector("#gal")
const readMoreGal = document.querySelector(".hidden-gal")
gal.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMoreGal.classList.add('hidden-gal')
    gal.classList.remove("less")
    gal.textContent = "Read More"
    }else{
    readMoreGal.classList.remove('hidden-gal')
    gal.classList.add("less")
    gal.textContent ="Read Less"
    }
    
    
})

