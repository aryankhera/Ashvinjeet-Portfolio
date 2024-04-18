(()=>{"use strict";gsap.registerPlugin(ScrollTrigger),document.querySelector(".nav-container");var e=document.documentElement;getComputedStyle(e),document.querySelectorAll(".left-social-links ul li a"),document.querySelector(".right-mail-link a"),document.querySelector(".nav-links");var t=document.querySelector(".follow_cursor");document.querySelector(".workbtn"),document.getElementById("scroll_mouse");const o=document.querySelector("#l_time");var n=document.querySelector("#Sun"),r=document.querySelector("#Moon");const a=document.querySelectorAll(".scroller");var i;document.querySelectorAll(".about_heading"),gsap.registerPlugin(ScrollTrigger),i=(new Date).toLocaleTimeString("en-US"),o.innerText=i,window.matchMedia("(prefers-reduced-motion:reduce)").matches||a.forEach((e=>{e.setAttribute("data-animated",!0);const t=e.querySelector(".loop-container"),o=Array.from(t.children);t.style.animationDuration=t.offsetWidth/150+"s",o.forEach((e=>{const o=e.cloneNode(!0);o.setAttribute("aria-hidden",!0),t.appendChild(o)}))}));var d=gsap.timeline();c();const l=e=>{document.querySelectorAll(`.${e}`).forEach((e=>{let t=document.createElement("span"),o=document.createElement("span");t.classList.add("parent"),o.classList.add("child"),o.textContent=e.textContent,t.appendChild(o),e.innerHTML="",e.appendChild(t)}))};function c(){var e="light";if(localStorage.getItem("theme")){if("dark"==localStorage.getItem("theme"))e="dark",document.querySelector("body").classList.add("theme-dark"),document.querySelector("body").classList.remove("theme-light"),document.getElementById("mainLogo").src="../images/logo_2.svg",document.getElementById("juice").src="../images/juice.png",document.getElementById("lightMode").classList.add("hidden"),document.getElementById("darkMode").classList.remove("hidden"),n.style.display="none",r.style.display="inline",console.log("1");else if("light"==localStorage.getItem("theme"))return console.log("Light theme incoming!!!"),document.querySelector("body").classList.add("theme-light"),document.querySelector("body").classList.remove("theme-dark"),document.getElementById("mainLogo").src="../images/logo.svg",document.getElementById("juice").src="../images/Juice_invert.png",n.style.display="inline",r.style.display="none",document.getElementById("lightMode").classList.remove("hidden"),document.getElementById("darkMode").classList.add("hidden"),console.log("2"),!1}else"light"==e?(document.querySelector("body").classList.add("theme-light"),document.querySelector("body").classList.remove("theme-dark"),document.getElementById("mainLogo").src="../images/logo.svg",document.getElementById("juice").src="../images/Juice_invert.png",n.style.display="inline",r.style.display="none",document.getElementById("lightMode").classList.remove("hidden"),document.getElementById("darkMode").classList.add("hidden"),console.log("3")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark",document.querySelector("body").classList.add("theme-dark"),document.querySelector("body").classList.remove("theme-light"),document.getElementById("mainLogo").src="../images/logo_2.svg",document.getElementById("juice").src="../images/juice.png",n.style.display="none",r.style.display="inline",document.getElementById("lightMode").classList.remove("hidden"),document.getElementById("darkMode").classList.add("hidden"),console.log("4"))}l("reveal"),l("reveal1"),l("reveal2"),d.from(".reveal .child",{y:100,ease:Circ.easeInOut,duration:.75}).to(".reveal .child",{y:-100,ease:Circ.easeInOut,duration:.75}).from(".reveal1 .child",{y:100,ease:Circ.easeInOut,duration:.75}).to(".reveal1 .child",{y:-100,ease:Circ.easeInOut,duration:.75}).from(".reveal2 .child",{y:100,ease:Circ.easeInOut,duration:.75}).to(".reveal2 .child",{y:-100,ease:Circ.easeInOut,duration:.75}).to("#mainloader",{height:0,ease:Circ.easeInOut,duration:1}).to("#brownpage",{top:0,height:"100%",ease:Circ.easeInOut,duration:1,delay:-1}).to("#brownpage",{height:0,ease:Circ.easeInOut,duration:2,delay:-.5}).to(".nav-container",{opacity:"1",duration:.2},"-=0.3").to(".follow_cursor",{display:"block"}).to(".hero-div",{opacity:"1",duration:.8},"-=0.1").to(".first_hero",{opacity:"1",duration:.5},"-=0.2").to(".left-social-links",{opacity:"1",duration:.5}).to(".right-bar",{opacity:"1",duration:.5},"-=0.5"),gsap.set(t,{xPercent:-50,yPercent:-50}),window.addEventListener("mousemove",(e=>{const{clientX:o,clientY:n}=e;Math.round(o/window.innerWidth*100),Math.round(n/window.innerHeight*100),gsap.to(t,{x:o,y:n})})),r.addEventListener("click",(()=>{localStorage.setItem("theme","light"),c()})),n.addEventListener("click",(()=>{localStorage.setItem("theme","dark"),c()})),gsap.timeline({scrollTrigger:{trigger:".about_section",start:"-150px center",end:"200px center",scrub:!0}}).to(".about_heading h1 ",{top:"0px",opacity:"1"}).to(".about_heading span ",{top:"0px",opacity:"1"},"-=0.3").to(".about_section .intro .para p",{top:"0px",stagger:.1}),gsap.to(".about_section",{scrollTrigger:{trigger:".about_section",start:"-250px center",end:"200px center",scrub:!0},width:"100%",borderRadius:"0px",transform:"TranslateY(0%)",duration:1}),gsap.to(".about_section .whatcanIdo",{scrollTrigger:{trigger:".about_section",start:"top center",end:"bottom bottom",scrub:!0,markers:!0},opacity:"1"})})();