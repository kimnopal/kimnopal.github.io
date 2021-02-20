window.onscroll = function() {
    navSticky()
};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
function navSticky() {
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}


const links = document.querySelectorAll('.nav-links li a');

for( const link of links ) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
}

// dark mode 
const chk = document.getElementById('chk');

chk.addEventListener('change', function() {
    document.body.classList.toggle('dark');
});

//scroll
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}