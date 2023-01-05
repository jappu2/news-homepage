
document.querySelector(".menu-icon").addEventListener('click', function toggleMenu(){
    let menu = document.querySelector('.navigation'),
    shadeLayer = document.querySelector('.shade-layer')
     menu.classList.toggle('hidden')
     shadeLayer.classList.toggle('hidden')
     this.classList.toggle("opend")

})