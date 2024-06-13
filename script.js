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