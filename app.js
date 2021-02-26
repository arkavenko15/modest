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


// MODAL WINDOW BY SCROLL
let modalWindow = document.querySelector(".modal");
let closeModalWindow = document.querySelector(".modal-close-btn");
closeModalWindow.addEventListener('click',closeModal)
function openModal()
{
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");   
}
function closeModal()
{
    
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");       
}
function showModalByScroll()
{

    if(window.pageYOffset > document.body.scrollHeight/2)
    {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)
    }
}
window.addEventListener("scroll",showModalByScroll)