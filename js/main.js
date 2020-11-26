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
            pinSpacing: false
        }
    });

    gsap.set('.part4', {y: '-547px'});
    gsap.set('.part5', {y: '-722px'});
    gsap.set('.part6', {y: '-842px'});

}

window.addEventListener('load', function(){
    init();
});
