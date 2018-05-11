menu.onclick = function myFunction() {
    var x = document.getElementById('navigation_menu');

    if (x.className === "navigation") {
        x.className += " responsive";
    }
    else {
        x.className = "navigation";
    }
}
