const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");

const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");


function handleRemoveAdd(removeClassName, addClassName) {
    // start loop from 1 to 5
    // each loop it will remove and add an element, a class

    for (let i=1; i<6; i++) {
        let navName = "nav-" + i;
        const navElement = document.getElementById(navName);
        navElement.classList.remove(removeClassName + i);
        navElement.classList.add(addClassName + i);
        console.log(navName)
    }
}



function toggleNav() {
    // toggle to menubar open/close
    menuBars.classList.toggle("change");

    overlay.classList.toggle("overlay-active");

   
    if (overlay.classList.contains("overlay-active")) {
        
        // show slide
        overlay.classList.remove("overlay-slide-left");
        overlay.classList.add("overlay-slide-right");

        // add animation to navigation
        
        handleRemoveAdd("slide-out-", "slide-in-");

    } else {
        overlay.classList.remove("overlay-slide-right");
        overlay.classList.add("overlay-slide-left");

        // add animation to navigation
        handleRemoveAdd("slide-in-", "slide-out-");
    }

}



menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);



