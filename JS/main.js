// const { element } = require("prop-types");
var menu = document.querySelector(".nav-container");
var textOnly = document.querySelector(".text_only");
const myText = new SplitType(textOnly);
var textOnlyChar = document.querySelectorAll(".text_only .line .word .char");
var menu_link = document.querySelector(".nav-links");
var cursor = document.querySelector(".follow_cursor");
var workBtn = document.querySelector(".workbtn");
const overlay = document.querySelector(".overlay");
var tl = gsap.timeline();

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
  .to(".right-mail-link", 0.5, { opacity: "1" }, "-=0.5")
  .to(".nav-container", 0.5, { opacity: "1" }, "-=0.5");

// Follow cursor
gsap.set(cursor, { xPercent: -50, yPercent: -50 });
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);
  gsap.to(cursor, { x: clientX, y: clientY });
  // gsap.to(overlay, {
  //   "--x": `${clientX}%`,
  //   "--y": `${clientY}%`,
  //   duration: 0.3,
  //   ease: "sine.out",
  // });
});

menu.addEventListener("mouseover", function () {
  this.classList.add("nav-container--open");
});
menu.addEventListener("mouseout", function () {
  this.classList.remove("nav-container--open");
});

workBtn.onmouseover = () => {
  cursor.style.display = "none";
};

workBtn.onmouseleave = () => {
  cursor.style.display = "block";
};

// textOnly.addEventListener("mouseover", function () {
//   gsap.to(cursor, {
//     scale: 3,
//     border: "1px solid #df9d3f",
//     backgroundColor: "#df9d3f",
//     zIndex: "1",
//     opacity: "0.8",
//   });
// });
// textOnly.addEventListener("mouseout", function () {
//   gsap.to(cursor, {
//     scale: 1,
//     border: "2px solid black",
//     backgroundColor: "transparent",
//     filter: "invert(0)",
//   });
// });
// textOnlyChar.forEach((s) => {
//   s.addEventListener("mouseover", (e) => {
//     const { clientX, clientY } = e;
//     const x = Math.round((clientX / window.innerWidth) * 100);
//     const y = Math.round((clientY / window.innerHeight) * 100);

//     gsap.to(overlay, {
//       "--x": `${x}%`,
//       "--y": `${y}%`,
//       duration: 0.3,
//       ease: "sine.out",
//     });
//     gsap.to(cursor, {
//       opacity: 0,
//       border: "1px solid black",
//       backgroundColor: "black",
//       mixBlendMode: "multiply",
//       backdropFilter: "grayScale(1)",
//     });
//     console.log("values are", x, y);
//   });

//   s.addEventListener("mouseout", () => {
//     gsap.to(cursor, {
//       scale: 1,
//       border: "2px solid black",
//       backgroundColor: "transparent",
//       mixBlendMode: "none",
//       backdropFilter: "grayScale(0)",
//     });
//   });
// });

// });
