var crsr= document.querySelector(".cursor");
document.addEventListener("mousemove", function(dets){
     crsr.style.left= dets.x+30+"px"
     crsr.style.top=dets.y+"px"
})
var crsrblur= document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsrblur.style.left=dets.x-250+'px'
    crsrblur.style.top=dets.y -250 +"px"
})
var h4all= document.querySelectorAll(".listitems li")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border= "1px solid #fff"
    crsr.style.backgroundColor= "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border= "0px solid #95C11E "
    crsr.style.backgroundColor= "#95C11E"
  })
  
})
gsap.to(".navbar",{
 backgroundColor:"#000",
 duration:0.5,
 height:"130px",
 scrollTrigger:{
  trigger:".navbar",
  scroller:"body",
//   markers:true,
  start:"top -20%",
  end:"top -11%",
  scrub:true //repeat
 }
})
 gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        // markers:true,
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -90%",
        scrub:2
    }
 })
 gsap.from(".about-us  .aboutheading .img1,.about-us-content",{
  y:90,
  opacity:0,
  duration:1,
  // stagger:0.4,
  scrollTrigger:{
    trigger:".about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }
 });

 gsap.from(".cards",{
  scale:0.8,
  opacity:0,
  duration:1,
   stagger:0.1,
  scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }
 });
 gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});