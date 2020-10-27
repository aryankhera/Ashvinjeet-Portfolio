var menuText=document.querySelector(".menu-text")
var ham1=document.querySelector(".ham-icon1")
var ham2=document.querySelector(".ham-icon2")
var hamnavitem = document.querySelector(".ham-nav-item")
var sidenavitem=document.querySelectorAll("li.scroll-time-menu-items")
var tl= gsap.timeline()
var tl1= gsap.timeline()
var tl2=gsap.timeline()
// var rule=CssRulePlugin.getRule(".scroll-time-menu-items:first-child")
tl.to('#left-hero',1.5,{flex:"0 0 50%"}).to('#faded-text',1.2,{opacity:1})
tl1.from(menuText,1,{transform:"translate(50px,0px)"}).from(menuText,0.8,{opacity:0},"-=1")
// tl2.to('li.scroll-time-menu-items',1,{transform:"translate(5.5em,0px)"},"-=0.8")


// tl1.from(menuText,1,{transform:"translate(50px,0px)"}).from(menuText,0.8,{opacity:0},"-=1")
hamnavitem.addEventListener('click',()=>
{
    ham1.classList.toggle("change")
    // ham1.style.pointer
    ham2.classList.toggle("change")
    hamnavitem.classList.toggle("change")
    tl1.reversed()? tl1.play() :tl1.reverse()
    for(let i=0;i<sidenavitem.length;i++)
    {
        sidenavitem[i].classList.toggle("change")
    }
    
    // tl2.play()
    // ham1.style.transform="rotate(-45deg) translate(0px, 5px)"
    // ham1.style.backgroundColor="black"
    // ham2.style.transform="rotate(45deg) translate(0px, -5px)"
    // ham2.style.backgroundColor="black"
    // gsap.to('rule',{duration:1,cssRule:{transform:"translate(0px,0px)"}})
})

