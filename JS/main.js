// const { element } = require("prop-types");

var menuText = document.querySelector(".menu-text");
var ham1 = document.querySelector(".ham-icon1");
var ham2 = document.querySelector(".ham-icon2");
var hamnavitem = document.querySelector(".ham-nav-item");
var sidenavitem = document.querySelectorAll("li.scroll-time-menu-items");
var abtimgele = document.querySelector(".abt-img");
var abtimgelediv1 = document.querySelector(".abt-img-div1");
var overlayele = document.getElementById("overlay");
var cursor = document.querySelector(".follow_cursor");
var tl_loader = gsap.timeline();
var tl = gsap.timeline();
var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
// var rule = CssRulePlugin.getRule(".scroll-time-menu-items:first-child");

tl.to("#mainloader", {
  height: 0,
  ease: Circ.easeInOut,
  duration: 1,
})
  .to("#brownpage", {
    top: 0,
    height: "100%",
    ease: Circ.easeInOut,
    duration: 1,
    delay: -1,
  })
  .to("#brownpage", {
    height: 0,
    ease: Circ.easeInOut,
    duration: 2,
    delay: -0.5,
  })
  .to(".follow_cursor", {
    display: "block",
  })
  .to(".translate_div", {
    transform: "translate(0,-100vh)",
    height: "0px",
    ease: Power0.easeIn,
    delay: -1,
  })
  .to(".hero-div", 0.8, { opacity: "1" }, "-=0.1")
  .to(".left-social-links", 0.5, { opacity: "1" })
  .to(".right-mail-link", 0.5, { opacity: "1" }, "-=0.5");

// Follow cursor
// gsap.set(cursor, { xPercent: -50, yPercent: -50 });
// window.addEventListener("mousemove", (e) => {
//   gsap.to(cursor, { x: e.clientX, y: e.clientY });
// });

const revealToSpan = () => {
  document.querySelectorAll(".reveal").forEach = (elem) => {
    let parent = elem.createElement("span");
    let child = elem.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");

    child.textContent = elem.textContent;
    parent.appendChild(child);
  };
};

revealToSpan();
