const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobilepMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains("inactive");
    if (!isAsideClose){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobilepMenu(){
    const isAsideClose = aside.classList.contains("inactive");

    if (!isAsideClose){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
    
    if (!isdesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}