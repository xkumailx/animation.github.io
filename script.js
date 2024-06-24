gsap.set(".marquees-inner",{scale:5})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub: 1
    },
})

tl.to(".vdodiv" ,{
    
    '--clip':"0%",
    ease : Power2,
}, 'a')

tl.to(".marquees-inner" ,{
    
    scale:1,
    ease : Power2,
}, 'a')

tl.to(".lft" ,{
    
    xPercent:-20,
    stagger:0.1,
    ease : Power2,
}, 'a') 
tl.to(".rgt" ,{
    
    xPercent:-10,
    stagger:0.3,
    ease : Power2,
}, 'a') 


document.addEventListener('DOMContentLoaded', () => {
    const solCards = document.querySelectorAll('.sol-card');

    const observerOptions = {
        root: null,
        rootMargin: '-70% 0px 0px 0px', // Offset from the top by 50% of the viewport height
        threshold: 0
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('lag-gaya');
            } else {
                entry.target.classList.remove('lag-gaya');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    solCards.forEach(card => {
        observer.observe(card);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const solutions = document.querySelectorAll('.solution');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px 0px 0px', // No offset
        threshold: [0]
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.boundingClientRect.top === 0) {
                document.body.style.backgroundColor = 'red';
            } else if (!entry.isIntersecting && entry.boundingClientRect.top !== 0) {
                document.body.style.backgroundColor = ''; // Reset to default color
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    solutions.forEach(solution => {
        observer.observe(solution);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray('.slide');

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.slides',
            pin: true,
            scrub: 2,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".slides").offsetWidth
        }
    });
});