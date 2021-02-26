let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu =document.querySelector(".hidden-menu");
mobileMenu.addEventListener("click", function()
{
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu"))
    {
        mainMenu.classList.add("show-hidden-menu");
        mainMenu.classList.remove("hidden-menu");
        // mainMenu.classList.remove("main-menu");       
    }
    else
    {
        mainMenu.classList.remove("show-hidden-menu");
        mainMenu.classList.add("hidden-menu");
        // mainMenu.classList.add("main-menu");
    }

})