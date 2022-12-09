const tl = gsap.timeline({ default: { ease: 'power2.out' } });

tl.to(".slider", { y: "-100%", duration: 1.2 });
tl.to(".intro .cricketer", { y: "0%", duration: 1.2 }, "-=1");//-=1 ---starts the animation same time as our first animation starts
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 1 });