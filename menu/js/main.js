/*JS MADE BY FREDY REYES 2019035*/
let myNav = document.getElementById('navbar');
console.log(myNav.classList)
window.onscroll = function () { 
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        myNav.classList.add("navbar__Display--true");
        myNav.classList.remove("navbar__Display--None");
    } 
    else {
        myNav.classList.add("navbar__Display--None");
        myNav.classList.remove("navbar__Display--true");
    }
};