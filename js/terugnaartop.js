let mybutton = document.getElementById("terug");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (window.scrollY > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}