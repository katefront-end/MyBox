let header = document.querySelector ('.header');

window.addEventListener('scroll', function() {
    let showMeScroll = scrollY;

    if (showMeScroll > 970) {
        header.classList.add ('shadow');
    } else {
        header.classList.remove ('shadow');
    }

    console.log (showMeScroll);
})

let nav = document.querySelector ('.header__nav');
let navToggle = document.querySelector ('.navToggle');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})

const anchors = document.querySelectorAll ('a[href*="#"]');

for (let anchor of anchors) {

    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

