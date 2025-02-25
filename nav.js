const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu__icon"),
    overlay = document.querySelector(".overlay");
console.log(navBar, menuBtns, overlay);

menuBtns.forEach(menuBtn =>{
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle('open');
    })
})

overlay.addEventListener('click', () =>{
    navBar.classList.remove('open');
})