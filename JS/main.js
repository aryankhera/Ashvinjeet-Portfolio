window.addEventListener('load', (event) => {
    console.log("Hello World")
    var leftHeroSection=document.getElementById("left-hero")
    leftHeroSection.style.flex="0 0 50%"
    leftHeroSection.then(
        function()
        {
            var fadedText=document.getElementById("faded-text")
            fadedText.style.display="block"
        }
       
    )
    
  });