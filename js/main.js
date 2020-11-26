gsap.registerPlugin(ScrollTrigger);

function getTopPartsHeight() {
    return document.querySelector('.pen-top').clientHeight - 22;
}

function init(){
    
    // move part 3 to cover part 2
    gsap.set('.part3', {
        y: () => {
            return -(getTopPartsHeight())
        },
        scrollTrigger: {
            id: 'pen-body',
            trigger: '.part3',
            start: 'top bottom-=270px',
            end: `+=${getTopPartsHeight()}`,
            pin: true,
            pinSpacing: false,
            markers: true
        }
    });

}

window.addEventListener('load', function(){
    init();
});
