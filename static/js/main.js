var slides = document.querySelectorAll('.slide');
var n = 0;
var len = slides.length;

slides.item(n).setAttribute('style', '-webkit-transition: opacity 2.0s ease-in; opacity: 1;');
n = 1; 

var checkSlide = function () {
    var slide, rect;
    if (n < len) {
        slide = slides.item(n);

        if (elementInViewport(slide)) {
            slide.setAttribute('style', '-webkit-transition: opacity 2.0s ease-in; opacity: 1;');
            n += 1;
        }
    } else {
        clearInterval(timer);
    }
};

var timer = setInterval(checkSlide, 3000);

function elementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return rect.top < (window.innerHeight || document.body.clientHeight) && rect.left < (window.innerWidth || document.body.clientWidth);
}
