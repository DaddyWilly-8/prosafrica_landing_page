function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
        document.getElementById('blue_logo').classList.add('d-none')
        document.getElementById('white_logo').classList.remove('d-none')
    } else {
        navbar.classList.remove("nav-sticky");
        document.getElementById('blue_logo').classList.remove('d-none')
        document.getElementById('white_logo').classList.add('d-none')
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
});





