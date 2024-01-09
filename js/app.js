let elBody = document.querySelector("body")
let elModeBtn = document.querySelector("#modeBtn") 
let elHamburgerBtn = document.querySelector(".menu-btn")
let elHamburgerClose = document.querySelector(".close")
let elModal = document.querySelector(".model")

elModeBtn.addEventListener("click", function(){
    elBody.classList.toggle("mode")
})

elHamburgerBtn.addEventListener("click", function() {
    elModal.classList.toggle("show-modal");
    elHamburgerBtn.classList.toggle("remove-self")
    elHamburgerClose.classList.toggle("open-close")
})

elHamburgerClose.addEventListener("click", function() {
    elModal.classList.toggle("show-modal");
    elHamburgerBtn.classList.toggle("remove-self")
    elHamburgerClose.classList.toggle("open-close")
})
