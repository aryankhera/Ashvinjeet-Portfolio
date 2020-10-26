var menuText=document.querySelector(".menu-text")
var ham1=document.querySelector(".ham-icon1")
var ham2=document.querySelector(".ham-icon2")
var hamnavitem = document.querySelector(".ham-nav-item")
var tl= gsap.timeline()
var tl1= gsap.timeline()
tl.to('#left-hero',1.5,{flex:"0 0 50%"}).to('#faded-text',1.2,{opacity:1})
tl1.from(menuText,1,{transform:"translate(50px,0px)"}).from(menuText,0.8,{opacity:0},"-=1")



// tl1.from(menuText,1,{transform:"translate(50px,0px)"}).from(menuText,0.8,{opacity:0},"-=1")
hamnavitem.addEventListener('click',()=>
{
    ham1.classList.toggle("change")
    // ham1.style.pointer
    ham2.classList.toggle("change")
    hamnavitem.classList.toggle("change")
    tl1.reversed()? tl1.play() :tl1.reverse()
    // ham1.style.transform="rotate(-45deg) translate(0px, 5px)"
    // ham1.style.backgroundColor="black"
    // ham2.style.transform="rotate(45deg) translate(0px, -5px)"
    // ham2.style.backgroundColor="black"
    
})

