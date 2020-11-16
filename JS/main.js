var menuText=document.querySelector(".menu-text")
var ham1=document.querySelector(".ham-icon1")
var ham2=document.querySelector(".ham-icon2")
var hamnavitem = document.querySelector(".ham-nav-item")
var sidenavitem=document.querySelectorAll("li.scroll-time-menu-items")
var abtimgele=document.querySelector(".abt-img");
var abtimgelediv1=document.querySelector(".abt-img-div1");
var overlayele=document.getElementById("overlay");
var tl= gsap.timeline()
var tl1= gsap.timeline()
var tl2=gsap.timeline()
// var rule=CssRulePlugin.getRule(".scroll-time-menu-items:first-child")
tl.to('.translate_div',0.8,{transform:"translate(0,-100vh)",height:"0px",ease:Power0.easeIn}).to('nav',1,{opacity:"1"},"-=0.1").to(".hero-div",0.8,{opacity:"1"},"-=0.1").to(".left-social-links",0.5,{opacity:"1"}).to(".right-mail-link",0.5,{opacity:"1"},"-=0.5")
tl1.from(menuText,0.2,{transform:"translate(50px,0px)",ease:Power0.easeIn}).from(menuText,0.2,{opacity:0},"-=0.2")


if(tl1.reversed)
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
    
   
    
})

let tl4=gsap.timeline(
    {
        scrollTrigger:
        {
            trigger:'.dark',
            start:"top center",
            toggleActions:"play pause reset reverse",
            // markers:true
        }
    }
);

tl4.fromTo(".main-menu",{
    opacity:1,display:"flex",duration:0.5
},
{
    opacity:0,display:"none",duration:0.5
}
)
.fromTo(".Available_projects_p",
{
    opacity:1,display:"flex",duration:0.2
},
{
    opacity:0,display:"none",duration:0.2
},"-=0.5")
.fromTo(".navbar-nav",
{
    opacity:0,display:"none",duration:0.5
},
{
    opacity:1,display:"flex",duration:0.5
})



    window.addEventListener("scroll",()=>
{
    
    for(let i=0;i<sidenavitem.length;i++)
    {
        ham1.classList.remove("change")
        
        ham2.classList.remove("change")
        hamnavitem.classList.remove("change")
        tl1.play()
        for(let i=0;i<sidenavitem.length;i++)
        {
            sidenavitem[i].classList.remove("change")
        }
    }
    
})



// active nvabar

// Get the container element
var mainContainer = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
var navbtns = mainContainer.getElementsByClassName("navbtn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navbtns.length; i++) {
  navbtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}


// hover
abtimgele.addEventListener("mouseenter",()=>
{
    
    overlayele.style.opacity="0"
    abtimgelediv1.style.transform="translate(5px,5px)"
    abtimgelediv1.style.transition="0.2s ease-in"
})
abtimgele.addEventListener("mouseleave",()=>
{
    overlayele.style.opacity="0.3"
    abtimgelediv1.style.transform="translate(0px,0px)"
    abtimgelediv1.style.transition="0.2s ease-in"
})




