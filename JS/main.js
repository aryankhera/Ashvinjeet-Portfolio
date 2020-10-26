// window.addEventListener('load', (event) => {
//     console.log("Hello World")
//     var leftHeroSection=document.getElementById("left-hero")
//     leftHeroSection.style.flex="0 0 50%"
//     leftHeroSection.then(
//         function()
//         {
//             var fadedText=document.getElementById("faded-text")
//             fadedText.style.display="block"
//         }
       
//     )
    
//   });
// // const tl = new TimelineLite();
// gsap.to("#left-hero",1,{
//     width:"100%"
// }).to("#faded-text",1,{
//     display:"block"
// })
var tl= gsap.timeline()
    tl.to('#left-hero',1.5,{flex:"0 0 50%"}).to('#faded-text',1.2,{opacity:1})