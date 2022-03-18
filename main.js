function resonsiveMenu() {
    var x = document.getElementsById("navbar")
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav"
    }
}