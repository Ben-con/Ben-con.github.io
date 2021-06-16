const readMoreWeb = document.querySelector('.hidden-port')
const webApp = document.querySelector("#web-app")
const portfolio = document.querySelector("#port")
const form = document.querySelector("#form")
const emp = document.querySelector("#employee")
const game = document.querySelector("#game")
const gal = document.querySelector("#gal")


portfolio.addEventListener("click",e =>{
    if(e.target.classList.contains("less")){
    readMoreWeb.classList.add('hidden-port')
    portfolio.classList.remove("less")
    portfolio.textContent = "Read More"
    }else{
    readMoreWeb.classList.remove('hidden-port')
    portfolio.classList.add("less")
    portfolio.textContent ="Read Less"
    }
    
    
})

