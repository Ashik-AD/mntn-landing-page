var _a = document.querySelectorAll('.bg__img-sky, .bg__img-mountain, .bg__img-human'), imgSky = _a[0], imgMountain = _a[1], imgHuman = _a[2];
var cta = document.querySelector('.cta');
var screenHeight = window.screen.availHeight;
var scrollBtn = document.querySelector('.btn__scroll');
var loading = document.querySelector('.loading');
setTimeout(function () {
    loading.className += ' loading-hidden';
}, 2000);
scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.addEventListener('click', function () {
    var offsetTop = document.querySelector('.main__content').offsetTop;
    function scrollToMainContent() {
        var scrollTop = window.scrollY;
        window.scrollTo({ top: scrollTop + 26 });
        if (scrollTop < offsetTop) {
            window.requestAnimationFrame(scrollToMainContent);
        }
    }
    window.requestAnimationFrame(scrollToMainContent);
});
function parallax() {
    var scrollY = window.scrollY;
    if (scrollY > screenHeight) {
        cta.style.opacity = '0';
        return;
    }
    var opacity = (((screenHeight / 2) - scrollY) / 4) / 100;
    var shiftBy = (scrollY * 0.1) / 10;
    cta.style.opacity = "".concat(opacity);
    imgSky.style.transform = "translate3d(0px, ".concat(-(shiftBy * 7), "%, 0px)");
    imgMountain.style.transform = "translate3d(0px, ".concat(-(shiftBy * 2.5), "%, 0px)");
    imgHuman.style.transform = "translate3d(0px, ".concat(-(shiftBy), "%, 0px)");
}
parallax();
window.addEventListener('scroll', parallax);
