const index = document.getElementById('index')
const action = document.getElementById('action')

const one = document.querySelector('button')

function isActive(){
    index.classList.toggle('is-active')
    action.classList.toggle('is-active')
}


window.onscroll = function () {
    if(window.scrollY >= 600){
        one.style.display = 'block'
    }
    else {
        one.style.display = 'none'
    }
}

one.onclick = function () {
    window.scrollTo(
        {
            top:0,
            behavior:"smooth"
        }
    )
}