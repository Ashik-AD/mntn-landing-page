    const [imgSky, imgMountain, imgHuman] = document.querySelectorAll('.bg__img-sky, .bg__img-mountain, .bg__img-human') as any;
    
    const cta = document.querySelector('.cta') as HTMLDivElement;
    const screenHeight = window.screen.availHeight;
    const scrollBtn = document.querySelector('.btn__scroll') as HTMLButtonElement;
    const loading = document.querySelector('.loading') as HTMLDivElement;
    
    setTimeout(() => {
        loading.className += ' loading-hidden'
    }, 2000)
    
    scrollBtn?.addEventListener('click', () => {
        const {offsetTop} = document.querySelector('.main__content') as HTMLDivElement;
        function scrollToMainContent(){
            const scrollTop = window.scrollY;
            window.scrollTo({top: scrollTop + 26})
            if(scrollTop < offsetTop){
                window.requestAnimationFrame(scrollToMainContent)
            }
        }
        window.requestAnimationFrame(scrollToMainContent)
    })
    
    function parallax() {
        const scrollY = window.scrollY;
        if(scrollY > screenHeight){
            cta.style.opacity = '0';
            return;
        }
        const opacity = (((screenHeight / 2) - scrollY) / 4) / 100;
        const shiftBy = (scrollY * 0.1) / 10;
        cta.style.opacity = `${opacity}`;
        imgSky.style.transform = `translate3d(0px, ${-(shiftBy * 7)}%, 0px)`;
        imgMountain.style.transform = `translate3d(0px, ${-(shiftBy * 2.5)}%, 0px)`;
        imgHuman.style.transform = `translate3d(0px, ${-(shiftBy)}%, 0px)`;
    }
    parallax()
    window.addEventListener('scroll', parallax);

