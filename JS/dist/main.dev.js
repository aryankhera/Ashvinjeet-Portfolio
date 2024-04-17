"use strict";

var _variables = _interopRequireDefault(require("../variables.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const { element } = require("prop-types");
gsap.registerPlugin(ScrollTrigger);
var menu = document.querySelector(".nav-container");
var root = document.documentElement;
var p1 = getComputedStyle(root);
var leftLink = document.querySelectorAll(".left-social-links ul li a");
var rightLink = document.querySelector(".right-mail-link a"); // console.log(p1.getPropertyValue())
// var textOnly = document.querySelector(".text_only");
// const myText = new SplitType(textOnly);
// var textOnlyChar = document.querySelectorAll(".text_only .line .word .char");

var menu_link = document.querySelector(".nav-links");
var cursor = document.querySelector(".follow_cursor");
var workBtn = document.querySelector(".workbtn");
var Scroll_more = document.getElementById("scroll_mouse");
var x = document.querySelector("#l_time");
var modeChangerSun = document.querySelector("#Sun");
var modeChangerMoon = document.querySelector("#Moon");
var scrollers = document.querySelectorAll(".scroller"); // const cursor1 = document.querySelector(".cursor");

var overlay = document.querySelectorAll(".project");
var f1 = false; // const preview = document.querySelector(".preview");
// const preview_img = document.querySelector(".preview-img");

gsap.registerPlugin(ScrollTrigger);

var getDateTime = function getDateTime() {
  var date = new Date();
  var time = date.toLocaleTimeString("en-US");
  x.innerText = time;
};

getDateTime();

if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach(function (item) {
    item.setAttribute("data-animated", true);
    var scrollerInner = item.querySelector(".loop-container");
    var scrollerContent = Array.from(scrollerInner.children);
    scrollerInner.style.animationDuration = scrollerInner.offsetWidth / 150 + "s";
    scrollerContent.forEach(function (i) {
      var duplicatedItem = i.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

var currentScroll = 0;
var isScrollingDown = true;
var tl = gsap.timeline();
detectColorScheme(); // Moon button set to be hidden by default
// basic function to convert reveal class into sub elements

var revealToSpan = function revealToSpan(classname) {
  document.querySelectorAll(".".concat(classname)).forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.textContent = elem.textContent;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
};

revealToSpan("reveal");
revealToSpan("reveal1");
revealToSpan("reveal2"); // timeline starts for starting loader and hero section

tl.from(".reveal .child", {
  y: 100,
  ease: Circ.easeInOut,
  duration: 0.75
}).to(".reveal .child", {
  y: -100,
  ease: Circ.easeInOut,
  duration: 0.75
}).from(".reveal1 .child", {
  y: 100,
  ease: Circ.easeInOut,
  duration: 0.75
}).to(".reveal1 .child", {
  y: -100,
  ease: Circ.easeInOut,
  duration: 0.75
}).from(".reveal2 .child", {
  y: 100,
  ease: Circ.easeInOut,
  duration: 0.75
}).to(".reveal2 .child", {
  y: -100,
  ease: Circ.easeInOut,
  duration: 0.75
}).to("#mainloader", {
  height: 0,
  ease: Circ.easeInOut,
  duration: 1
}).to("#brownpage", {
  top: 0,
  height: "100%",
  ease: Circ.easeInOut,
  duration: 1,
  delay: -1
}).to("#brownpage", {
  height: 0,
  ease: Circ.easeInOut,
  duration: 2,
  delay: -0.5
}).to(".nav-container", {
  opacity: "1",
  duration: 0.2
}, "-=0.8").to(".follow_cursor", {
  display: "block"
}).to(".hero-div", {
  opacity: "1",
  duration: 0.8
}, "-=0.1").to(".first_hero", {
  opacity: "1",
  duration: 0.5
}, "-=0.2").to(".left-social-links", {
  opacity: "1",
  duration: 0.5
}).to(".right-bar", {
  opacity: "1",
  duration: 0.5
}, "-=0.5"); // Follow cursor

gsap.set(cursor, {
  xPercent: -50,
  yPercent: -50
});
window.addEventListener("mousemove", function (e) {
  var clientX = e.clientX,
      clientY = e.clientY;
  var x = Math.round(clientX / window.innerWidth * 100);
  var y = Math.round(clientY / window.innerHeight * 100);
  gsap.to(cursor, {
    x: clientX,
    y: clientY
  });
}); // cursor remove on work button hover homepage
// workBtn.onmouseover = () => {
//   cursor.style.display = "none";
// };
// workBtn.onmouseleave = () => {
//   cursor.style.display = "block";
// };
//Mode changer button for Sun/Moon icon

modeChangerMoon.addEventListener("click", function () {
  localStorage.setItem("theme", "light");
  detectColorScheme();
});
modeChangerSun.addEventListener("click", function () {
  localStorage.setItem("theme", "dark");
  detectColorScheme();
});

function detectColorScheme() {
  var theme = "light"; //default to light
  //local storage is used to override OS theme settings

  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      document.getElementById("mainLogo").src = "../images/logo_2.svg";
      document.getElementById("juice").src = "../images/juice.png";
      document.getElementById("lightMode").classList.add("hidden");
      document.getElementById("darkMode").classList.remove("hidden");
      modeChangerSun.style.display = "none";
      modeChangerMoon.style.display = "inline";
      console.log("1");
      helloTheme(theme);
    } else if (localStorage.getItem("theme") == "light") {
      console.log("Light theme incoming!!!");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      document.getElementById("mainLogo").src = "../images/logo.svg";
      document.getElementById("juice").src = "../images/Juice_invert.png";
      modeChangerSun.style.display = "inline";
      modeChangerMoon.style.display = "none";
      document.getElementById("lightMode").classList.remove("hidden");
      document.getElementById("darkMode").classList.add("hidden");
      helloTheme(theme);
      console.log("2");
      return false;
    }
  } else if (theme == "light") {
    document.querySelector("body").classList.add("theme-light");
    document.querySelector("body").classList.remove("theme-dark");
    document.getElementById("mainLogo").src = "../images/logo.svg";
    document.getElementById("juice").src = "../images/Juice_invert.png";
    modeChangerSun.style.display = "inline";
    modeChangerMoon.style.display = "none";
    document.getElementById("lightMode").classList.remove("hidden");
    document.getElementById("darkMode").classList.add("hidden");
    console.log("3");
    helloTheme(theme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    var theme = "dark";
    document.querySelector("body").classList.add("theme-dark");
    document.querySelector("body").classList.remove("theme-light");
    document.getElementById("mainLogo").src = "../images/logo_2.svg";
    document.getElementById("juice").src = "../images/juice.png";
    modeChangerSun.style.display = "none";
    modeChangerMoon.style.display = "inline";
    document.getElementById("lightMode").classList.remove("hidden");
    document.getElementById("darkMode").classList.add("hidden");
    console.log("4");
    helloTheme(theme);
  }
}

gsap.to(".about_section", {
  scrollTrigger: {
    trigger: ".about_section",
    start: "-250px center",
    end: "200px center",
    scrub: true // markers:true

  },
  width: "100%",
  borderRadius: "0px",
  transform: "TranslateY(0%)",
  duration: 1
});

function helloTheme(theme) {
  var textColor = _variables["default"][theme].textColor;
  var alternateText = _variables["default"][theme].alternateText;
  var newColor; // cursor.style.borderColor = textColor;
  // rightLink.style.color = textColor;
  // console.log("info",theme,textColor,alternateText)

  leftLink && leftLink.forEach(function (item) {
    gsap.to(item, {
      scrollTrigger: {
        trigger: ".about_section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true
      },
      color: alternateText
    });
  }); // rightLink.style.color = newColor;

  gsap.to(rightLink, {
    scrollTrigger: {
      trigger: ".about_section",
      start: "top top",
      end: "bottom bottom",
      scrub: true // markers: true,
      // onEnter: () => ScrollTrigger.direction = 1, // Scroll direction is down
      // onLeave: () => ScrollTrigger.direction = -1 ,// Scroll direction is up
      // onUpdate: (self) => {
      //   // Update text color based on scroll position
      //   // const progress = self.progress;
      //   console.log("before update ",alternateText,textColor)
      //  newColor =
      //     ScrollTrigger.direction === 1 ? alternateText : textColor;
      //   // console.log("interpolate",textColor,alternateText,newColor)
      //   rightLink.style.color = newColor;
      // },

    },
    color: alternateText
  });
  gsap.to(cursor, {
    scrollTrigger: {
      trigger: ".about_section",
      start: "top top",
      end: "bottom bottom",
      scrub: true // markers: true,
      // onUpdate: (self) => {
      //   // Update text color based on scroll position
      //   const progress = self.progress;
      //   newColor = gsap.utils.interpolate(textColor, alternateText, progress);
      //   cursor.style.borderColor = newColor;
      // },

    },
    borderColor: alternateText
  });
} // let isInside = false;
// const bgPosition = {
//   p1: "0 0",
//   p2: "0 50% ",
//   p3: "0 100%",
// };
// const moveStuff = (e) => {
//   const mouseInside = isMouseInsideContainer(e);
//   if (mouseInside != isInside) {
//     isInside = mouseInside;
//     if (isInside) {
//       gsap.to(preview, 0.3, {
//         scale: 1,
//       });
//     } else {
//       gsap.to(preview, 0.3, {
//         scale: 0,
//       });
//     }
//   }
// };
// const moveProject = (e) => {
//   const previewrect = preview.getBoundingClientRect();
//   const offsetX = previewrect.width / 2;
//   const offsetY = previewrect.height / 2;
//   preview.style.left = e.pageX - offsetX + "px";
//   preview.style.top = e.pageY - offsetY + "px";
// };
// const moveProjectImg = (project)=>{
//   const projectId =project.id;
//   gsap.to(preview_img,0.4,{
//     backgroundPosition:bgPosition[projectId] || "0 0",
//   });
// }
// const isMouseInsideContainer=(e)=>{
//   const containerRext=projects__list.getBoundingClientRect();
//   return(
//     e.pageX >= containerRext.left &&
//     e.pageX <= containerRext.right &&
//     e.pageY >= containerRext.top &&
//     e.pageY<=containerRext.bottom
//   )
// }
// window.addEventListener("mousemove",moveStuff)
// Array.from(projects__list.children).forEach((project)=>{
// project.addEventListener("mousemove",moveProject);
// project.addEventListener("mousemove",moveProjectImg.bind(null,project))
// })
// function moveCircle(e){
//   gsap.to(cursor1,0.5,{
//     left:e.pageX,
//     top:e.pageY
//   },0.03)
// }
// document.querySelector(".p-1").addEventListener("mouseover",()=>{
//   cursor.style.backgroundImage =
//     "url(https://images.unsplash.com/photo-1712145078393-665300b197e5?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&w=1064&q=80)";
// });
// document.querySelector(".p-2").addEventListener("mouseover", () => {
//   cursor.style.backgroundImage =
//     "url(https://images.unsplash.com/photo-1648515369057-ab0892a22291?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&w=1064&q=80)";
// });
// document.querySelector(".p-3").addEventListener("mouseover", () => {
//   cursor.style.backgroundImage =
//     "url(https://images.unsplash.com/photo-1706013789928-6147cd7f571e?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&w=1064&q=80)";
// });
// Array.from(overlay).forEach((item)=>{
//   item.addEventListener("mousemove", () => {
//     f1 = true;
//     gsap.to(cursor1, 0.3, {
//       scale: 1,
//       autoAlpha: 1,
//     });
//     item.addEventListener("mousemove", moveCircle);
//   });
//   item.addEventListener("mouseout", () => {
//     f1 = false;
//     gsap.to(cursor1, 0.3, {
//       scale: 0.1,
//       autoAlpha: 0,
//     });
//   });
// })
// overlay.mouseout()


Array.from(overlay).forEach(function (i) {
  i.addEventListener('mouseover', function (e) {
    gsap.set(".project .img-wrapper img", {
      xPercent: -50,
      yPercent: -50
    });
    var clientX = e.clientX,
        clientY = e.clientY;
    var x = Math.round(clientX / window.innerWidth * 100);
    var y = Math.round(clientY / window.innerHeight * 100);
    gsap.to(".project .img-wrapper img", {
      x: clientX,
      y: clientY
    });
  });
});