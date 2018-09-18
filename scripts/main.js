/*_________________________________
            Overlay page
*_________________________________*/
var nav = false;

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    nav = true;
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    nav = false;
}

function toggleNav() {
      nav ? closeNav() : openNav()
}
