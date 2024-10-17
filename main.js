const buttonLogin = document.querySelector('.button-login')
const buttonSigin = document.querySelector('.button-sigin')
const login = document.querySelector('.login')
const sigin = document.querySelector('.sigin')
buttonLogin.addEventListener('click', ()=> {
    login.style.animation = 'rotate .5s ease-in'
    login.style.display = 'none'
    sigin.style.display = 'flex'
    sigin.style.animation = 'rotate .5s ease-in'
})

buttonSigin.addEventListener('click', ()=> {
    sigin.style.animation = 'rotate .5s ease-in'
    sigin.style.display = 'none'
    login.style.display = 'flex'
    login.style.animation = 'rotate .5s ease-in'
})