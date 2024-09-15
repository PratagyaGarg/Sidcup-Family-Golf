let cursor_div = document.querySelector(".cursor-div");
let cursor_blur  = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",(dets)=>{
    let x = dets.clientX;
    let y = dets.clientY;
    cursor_div.animate({
        left: `${x-10}px`,
        top:`${y-10}px`,

    },{duration: 500,fill:"forwards"});
    cursor_blur.animate({
        left: `${x-140}px`,
        top:`${y-140}px`,

    },{duration: 800,fill:"forwards"});
});
gsap.to(".navbar",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        scroller: "body",
        trigger: ".navbar",
        start: "top -20px",
        end: "bottom 11%",
        scrub: 0.6,
}

})
gsap.to(".video-container video",{
    opacity: 0,
    scrollTrigger:{
        scroller: "body",
        trigger: ".video",
        start: "top -15%",
        end: "bottom 5%",
        scrub: 1

    }
})
let paras = document.querySelectorAll(".quotes p");
const masterTimeline = gsap.timeline({repeat: -1, yoyo: true, smoothChildTiming: true});
paras.forEach((para,index)=>{
    let tl = gsap.timeline()
    .to(para, {opacity: 1, duration: 10, ease: "back"})
    .to(para, {opacity: 0});
    masterTimeline.add(tl,"-=0.5");
});

let quote_icon = document.querySelectorAll('.quote-icon');
gsap.from(quote_icon[0],{
    x:-30,
    y:-20,
    scrollTrigger: {
        scroller: "body",
        trigger: ".testimonials",
        start: "top 90%",
        end: "bottom 80%",
        scrub: 2
    }
})
gsap.from(quote_icon[1],{
    x:30,
    y:30,
    scrollTrigger: {
        scroller: "body",
        trigger: ".testimonials",
        start: "top 90%",
        end: "bottom 80%",
        scrub: 2,
    }
})
let marquee = document.querySelector('.foot-cards-picker h2');
gsap.to(marquee, {
    y:-20,
    scrollTrigger:{
        scroller: "body",
        trigger: marquee,
        start: "top 90%",
        end: "bottom 100%",
        ease: "back",
    }
})
let images_track = document.querySelector('.images-tracker');
let images = Array.from(images_track.children);
let dot_nav = document.querySelector('.caraousal-slider');
let dots = Array.from(dot_nav.children);

const slideSize = images[0].getBoundingClientRect();
const slideWidth = slideSize.width;

let moveImage=(currentSlide, targetSlide)=>{
    let totalAmmountMove = targetSlide.style.left;
    console.log(totalAmmountMove);
    images_track.style.transform= `translateX(-${totalAmmountMove})`;

}
images.forEach((image, index) =>{
    image.style.left = slideWidth*index + "px";
})
dot_nav.addEventListener('click',e=>{
    let target = e.target.closest('button');
    if(!target) return;
    let currentSlide = document.querySelector('.current-slide');
    let targetPosition = dots.findIndex(dot => dot === target);
    let targetSlide = images[targetPosition];
    moveImage(currentSlide , targetSlide);

})




