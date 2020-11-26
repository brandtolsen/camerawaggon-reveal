gsap.registerPlugin(ScrollTrigger);

function getTopPartsHeight() {
    return document.querySelector('.pen-top').clientHeight - 22;
}

function init(){
    
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

    const partTopOffsets = [547, 722, 842];

    function fixPart(el, offset, index) {
        gsap.set(el, {y: -offset});

        gsap.to(el, { y: 0, ease: 'none', scrollTrigger: {
            trigger: '.pen-body',
            start: 'top bottom-=640px',
            end: `+=${offset}`,
            scrub: true,
            markers: true
        }});
    }

    gsap.utils.toArray(['.part4', '.part5', '.part6']).forEach((part, index) => {

        fixPart(part, partTopOffsets[index], index);

    });

}

window.addEventListener('load', function(){
    init();
});
