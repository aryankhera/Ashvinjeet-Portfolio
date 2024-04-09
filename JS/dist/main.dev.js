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
var overlay = document.querySelector(".overlay");
var Scroll_more = document.getElementById("scroll_mouse");
var x = document.querySelector("#l_time");
var modeChangerSun = document.querySelector("#Sun");
var modeChangerMoon = document.querySelector("#Moon");
var scrollers = document.querySelectorAll(".scroller");
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
  var newColor;
  console.log("info", theme, textColor, alternateText);
  leftLink && leftLink.forEach(function (item) {
    gsap.to(item, {
      scrollTrigger: {
        trigger: ".about_section",
        start: "-250px center",
        end: "200px center",
        scrub: true,
        markers: true,
        onUpdate: function onUpdate(self) {
          // Update text color based on scroll position
          var progress = self.progress;
          newColor = gsap.utils.interpolate(textColor, alternateText, progress);
          item.style.color = newColor;
        }
      }
    });
  });
  gsap.to(rightLink, {
    scrollTrigger: {
      trigger: ".about_section",
      start: "-250px center",
      end: "200px center",
      scrub: true,
      markers: true,
      onUpdate: function onUpdate(self) {
        // Update text color based on scroll position
        var progress = self.progress;
        newColor = gsap.utils.interpolate(textColor, alternateText, progress);
        rightLink.style.color = newColor;
      }
    }
  });
  gsap.to(cursor, {
    scrollTrigger: {
      trigger: ".about_section",
      start: "-250px center",
      end: "200px center",
      scrub: true,
      markers: true,
      onUpdate: function onUpdate(self) {
        // Update text color based on scroll position
        var progress = self.progress;
        newColor = gsap.utils.interpolate(textColor, alternateText, progress);
        cursor.style.borderColor = newColor;
      }
    }
  });
} // class LoopingElement {
//   constructor(element, currentTranslation, speed) {
//     this.element = element;
//     this.currentTranslation = currentTranslation;
//     this.speed = speed;
//     this.direction = true;
//     this.scrollTop = 0;
//     this.metric = 100;
//     this.lerp = {
//       current: this.currentTranslation,
//       target: this.currentTranslation,
//       factor: 0.2,
//     };
//     this.events();
//     this.render();
//   }
//   events() {
//     window.addEventListener("scroll", (e) => {
//       let direction = window.pageYOffset || document.documentElement.scrollTop;
//       if (direction > this.scrollTop) {
//         this.direction = true;
//         this.lerp.target += this.speed * 5;
//       } else {
//         this.direction = false;
//         this.lerp.target -= this.speed * 5;
//       }
//       this.scrollTop = direction <= 0 ? 0 : direction;
//     });
//   }
//   lerpFunc(current, target, factor) {
//     this.lerp.current = current * (1 - factor) + target * factor;
//   }
//   goForward() {
//     this.lerp.target += this.speed;
//     if (this.lerp.target > this.metric) {
//       this.lerp.current -= this.metric * 2;
//       this.lerp.target -= this.metric * 2;
//     }
//   }
//   goBackward() {
//     this.lerp.target -= this.speed;
//     if (this.lerp.target < -this.metric) {
//       this.lerp.current -= -this.metric * 2;
//       this.lerp.target -= -this.metric * 2;
//     }
//   }
//   animate() {
//     this.direction ? this.goForward() : this.goBackward();
//     this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);
//     this.element.style.transform = `translateX(${this.lerp.current}%)`;
//   }
//   render() {
//     this.animate();
//     window.requestAnimationFrame(() => this.render());
//   }
// }
// let elements = document.querySelectorAll(".item");
// new LoopingElement(elements[0], 100, 0.04);
// new LoopingElement(elements[1], 0, 0.04);
// new LoopingElement(elements[2], -100, 0.08);
// new LoopingElement(elements[3], -100, 0.08);
// new LoopingElement(elements[4], -100, 0.08);
// new LoopingElement(elements[5], -100, 0.08);
// new LoopingElement(elements[6], -100, 0.08);
// new LoopingElement(elements[7], -100, 0.08);
// new LoopingElement(elements[8], -100, 0.08);
// new LoopingElement(elements[9], -100, 0.08);
// new LoopingElement(elements[10], -100, 0.08);
// let tween = gsap
//   .to(".marquee_part", {
//     x: -100,
//     repeat: -1,
//     duration: 5,
//     ease: "linear",
//   })
//   .totalProgress(0.5);
// gsap.set(".marquee_inner", {
//   x: -50,
// });
// window.addEventListener("scroll", () => {
//   console.log(window.pageXOffset > currentScroll);
//   console.log("c", currentScroll);
//   if (window.pageYOffset > currentScroll) {
//     isScrollingDown = true;
//     currentScroll = window.pageYOffset;
//     console.log("in here");
//   } else {
//     isScrollingDown = false;
//     console.log("out therer");
//   }
//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1,
//   });
// });
// modeChangerSun.addEventListener("click", () => {
//   modeChangerMoon.classList.remove("hidden_class");
//   modeChangerSun.classList.add("hidden_class");
// });
// class for looping element marquee inspired andrew woan
// working on this
// class LoopingElement {
//   constructor(element, currentTranslation, speed) {
//     this.element = element;
//     this.currentTranslation = currentTranslation;
//     this.speed = speed;
//     this.direction = true;
//     this.scrollTop = 0;
//     this.metric = 100;
//     this.lerp = {
//       current: this.currentTranslation,
//       target: this.currentTranslation,
//       factor: 0.2,
//     };
//     this.events();
//     this.render();
//   }
//   events() {
//     window.addEventListener("scroll", (e) => {
//       let direction = window.pageYOffset || document.documentElement.scrollTop;
//       if (direction > this.scrollTop) {
//         this.direction = true;
//         this.lerp.target += this.speed * 5;
//       } else {
//         this.direction = false;
//         this.lerp.target -= this.speed * 5;
//       }
//       this.scrollTop = direction <= 0 ? 0 : direction;
//     });
//   }
//   lerpFunc(current, target, factor) {
//     this.lerp.current = current * (1 - factor) + target * factor;
//   }
//   goForward() {
//     this.lerp.target += this.speed;
//     if (this.lerp.target > this.metric) {
//       this.lerp.current -= this.metric * 2;
//       this.lerp.target -= this.metric * 2;
//     }
//   }
//   goBackward() {
//     this.lerp.target -= this.speed;
//     if (this.lerp.target < -this.metric) {
//       this.lerp.current -= -this.metric * 2;
//       this.lerp.target -= -this.metric * 2;
//     }
//   }
//   animate() {
//     this.direction ? this.goForward() : this.goBackward();
//     this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);
//     this.element.style.transform = `translateX(${this.lerp.current}%)`;
//   }
//   render() {
//     this.animate();
//     window.requestAnimationFrame(() => this.render());
//   }
// }
// let elements = document.querySelectorAll(".item");
// console.log("elements", elements);
// new LoopingElement(elements[0], 0, 0.08);
// new LoopingElement(elements[1], -100, 0.08);
// new LoopingElement(elements[2], -200, 0.08);
// new LoopingElement(elements[3], -300, 0.08);
// new LoopingElement(elements[4], -400, 0.08);
// new LoopingElement(elements[5], -500, 0.08);
// new LoopingElement(elements[6], -600, 0.08);
// let path=document.querySelector('path')
// let pathLength=path.getTotalLength()
// path.style.strokeDasharray=pathLength+ ' ' +pathLength;
// path.style.strokeDashoffset=pathLength;
// window.addEventListener('scroll',()=>{
//   var scrollPercentage =(document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//   var drawLength = pathLength * scrollPercentage;
//   path.style.strokeDashoffset = pathLength - drawLength;
// })
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });
// document.addEventListener("scroll",()=>{
//   window.scrollY > 70 ? (menu.classList.add("Scrolled")) : (menu.classList.remove("Scrolled"));
// })
// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause",
//   scroller: ".container",
// });