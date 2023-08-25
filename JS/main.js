// const { element } = require("prop-types");
var menu = document.querySelector(".nav-container");
// var textOnly = document.querySelector(".text_only");
// const myText = new SplitType(textOnly);
// var textOnlyChar = document.querySelectorAll(".text_only .line .word .char");
var menu_link = document.querySelector(".nav-links");
var cursor = document.querySelector(".follow_cursor");
var workBtn = document.querySelector(".workbtn");
const overlay = document.querySelector(".overlay");
const Scroll_more = document.getElementById("scroll_mouse");
var modeChangerSun = document.querySelector("#Sun");
var modeChangerMoon = document.querySelector("#Moon");
// const toggleSwitch = document.querySelector(
//   '#theme-switch input[type="checkbox"]'
// );
var tl = gsap.timeline();
// localStorage.clear();
detectColorScheme();
// Moon button set to be hidden by default
// var rule = CssRulePlugin.getRule(".scroll-time-menu-items:first-child");
// basic function to convert reveal class into sub elements
const revealToSpan = (classname) => {
  document.querySelectorAll(`.${classname}`).forEach((elem) => {
    let parent = document.createElement("span");
    let child = document.createElement("span");
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
revealToSpan("reveal2");
// timeline starts for starting loader and hero section
tl.from(".reveal .child", {
  y: 100,
  ease: Circ.easeInOut,
  duration: 0.75,
})
  .to(".reveal .child", {
    y: -100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .from(".reveal1 .child", {
    y: 100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .to(".reveal1 .child", {
    y: -100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .from(".reveal2 .child", {
    y: 100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .to(".reveal2 .child", {
    y: -100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .to("#mainloader", {
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
  .to(".nav-container", { opacity: "1", duration: 0.2 }, "-=0.8")
  .to(".follow_cursor", {
    display: "block",
  })
  .to(".hero-div", { opacity: "1", duration: 0.8 }, "-=0.1")
  .to(".left-social-links", { opacity: "1", duration: 0.5 })
  .to(".right-bar", { opacity: "1", duration: 0.5 }, "-=0.5")
  .to("#scroll_mouse", { opacity: "1", duration: 0.5 }, "-=0.5")
  .to(".scroll heading", { opacity: "0.8", duration: 0.5 }, "-=0.5");

// Follow cursor
gsap.set(cursor, { xPercent: -50, yPercent: -50 });
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);
  gsap.to(cursor, { x: clientX, y: clientY });
});

menu.addEventListener("mouseover", function () {
  this.classList.add("nav-container--open");
});
menu.addEventListener("mouseout", function () {
  this.classList.remove("nav-container--open");
});

// cursor remove on work button hover homepage
workBtn.onmouseover = () => {
  cursor.style.display = "none";
};

workBtn.onmouseleave = () => {
  cursor.style.display = "block";
};

var tl_modechange1 = gsap.timeline();
//Mode changer button for Sun/Moon icon
modeChangerMoon.addEventListener("click", () => {
  tl_modechange1
    .from("#Moon", {
      x: 0,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "inline",
    })
    .to("#Moon", {
      x: 100,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "none",
    })
    // .to("#Moon", { display: "none", duration: 0.2 }, "-=0.15")
    .from("#Sun", {
      x: 100,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "none",
    })
    .to("#Sun", {
      x: 0,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "inline",
    });
  localStorage.setItem("theme", "light");
  detectColorScheme();
});

modeChangerSun.addEventListener("click", () => {
  tl_modechange1
    .from("#Sun", {
      x: 0,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "inline",
    })
    .to("#Sun", {
      x: 100,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "none",
    })
    .from("#Moon", {
      x: 100,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "none",
    })
    .to("#Moon", {
      x: 0,
      ease: Circ.easeInOut,
      duration: 0.5,
      display: "inline",
    });
  localStorage.setItem("theme", "dark");
  detectColorScheme();
});

function detectColorScheme() {
  var theme = "light"; //default to light
  //local storage is used to override OS theme settings
  console.log("Color scheme func called", localStorage.getItem("theme"));
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
      document.getElementById("styleSheet").href = "../styles/dark_main.css";
      document.getElementById("mainLogo").src = "../images/logo_bg_black.svg";
      document.getElementById("mainLogo").style.width = "2vw";
      document.getElementById("mainLogo").style.maxHeight = "79.67px";
      modeChangerSun.style.display = "none";
      modeChangerMoon.style.display = "inline";
    } else if (localStorage.getItem("theme") == "light") {
      console.log("Light theme incoming!!!");
      document.getElementById("styleSheet").href = "../styles/main.css";
      document.getElementById("mainLogo").src = "../images/logo.svg";
      document.getElementById("mainLogo").style.width = "2vw";
      document.getElementById("mainLogo").style.maxHeight = "79.67px";
      modeChangerSun.style.display = "inline";
      modeChangerMoon.style.display = "none";
      return false;
    }
  } else if (theme == "light") {
    console.log("Light theme incoming!!!");
    document.getElementById("styleSheet").href = "../styles/main.css";
    document.getElementById("mainLogo").src = "../images/logo.svg";
    document.getElementById("mainLogo").style.width = "2vw";
    document.getElementById("mainLogo").style.maxHeight = "79.67px";
    modeChangerSun.style.display = "inline";
    modeChangerMoon.style.display = "none";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    console.log("Dark theme incoming!!!");
    var theme = "dark";
    document.getElementById("styleSheet").href = "../styles/dark_main.css";
    document.getElementById("mainLogo").src = "../images/logo.png";
    document.getElementById("mainLogo").style.width = "2vw";
    modeChangerSun.style.display = "none";
    modeChangerMoon.style.display = "inline";
  }
}

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