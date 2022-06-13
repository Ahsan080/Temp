let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'75%',
        scrub:1,

    },

});
let tl2= gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'75%',
        scrub:1,

    },

});
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.home',
        start:'0%',
        end:'75%',
        scrub:1,
    

    },

});

tl.fromTo('.sliding-text',{y:33 ,},{y:-35});
tl2.fromTo('.logo', {scale:.3,  },{scale:.05,  top:'3.1rem',left:'41%',x:'10%', y:'0%',opacity:'1',cursor: 'pointer'});

