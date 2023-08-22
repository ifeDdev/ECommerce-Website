let  bar = document.getElementById("bar")
let nav = document.getElementById("navbar")
let  close = document.getElementById("close")

if(bar) {
    bar.addEventListener('click', function(){
        nav.classList.add('active')
    })
}
if(close) {
    close.addEventListener('click', function(){
        nav.classList.remove('active')
    })
}

            // STYLE FOR THE SINGLE PRODUCT 

let mainImg = document.getElementById("mainImg")
let smallImg = document.getElementsByClassName("small-img")

smallImg[0].addEventListener('click', function(){
    mainImg.src = smallImg[0].src
})


smallImg[1].addEventListener('click', function(){
    mainImg.src = smallImg[1].src
})


smallImg[2].addEventListener('click', function(){
    mainImg.src = smallImg[2].src
})


smallImg[3].addEventListener('click', function(){
    mainImg.src = smallImg[3].src
})


smallImg[4].addEventListener('click', function(){
    mainImg.src = smallImg[4].src
})