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

    const allParts = gsap.utils.toArray('.part');
    allParts.forEach((part, index) => {

        let startPosition = 'top center';

        if(index === 2) {
            startPosition = `top+=${getTopPartsHeight()} center`
        }

        gsap.set(part, {
            scrollTrigger: {
                id: `${part.getAttribute('class')}`,
                trigger: part,
                start: startPosition,
                toggleClass: 'fade-in'
            }
        })

    });

    const partTopOffsets = [547, 722, 842];

    function fixPart(el, offset, index) {
        gsap.set(el, {y: -offset});

        gsap.to(el, { y: 0, ease: 'none', scrollTrigger: {
            trigger: '.pen-body',
            start: 'top bottom-=640px',
            end: `+=${offset}`,
            scrub: true
        }});
    }

    gsap.utils.toArray(['.part4', '.part5', '.part6']).forEach((part, index) => {

        fixPart(part, partTopOffsets[index], index);

    });

}

window.addEventListener('load', function(){
    init();
});
