var prevScrollpos = window.pageYOffset;
let Wh = window.innerHeight;




var leftItem = document.getElementById('bg-img-p');
var textual= document.getElementById('textual');
var rightItem = document.getElementById('slider-section');
var animat =document.getElementById("navbar");







window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = 1;
    if(currentScrollPos>650)
    {
      document.getElementById("navbar").style.backgroundColor = "#000";
    }
    else
    {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  } 
  else if(currentScrollPos>70)
  {
    var abc=(70-currentScrollPos);

    var opa=Math.abs(abc);
    opa=1/(opa);
    document.getElementById("navbar").style.opacity = opa;
  }  
  prevScrollpos = currentScrollPos;
}

window.onresize = function(){
//   // console.log(window.innerWidth);
  if((window.innerWidth)<=960)
  {
    document.getElementById("menu-btn").style.top="24px";
  }
  else
  {
    document.getElementById("menu-btn").style.top="44px";
  }
}

if((window.innerWidth)<=960)
{
  document.getElementById("menu-btn").style.top="24px";
}
else
{
  document.getElementById("menu-btn").style.top="44px";
}

// FOR OPENING THE HAMBURGER


const openbtn=document.getElementById("menu-btn");
const overlay=document.getElementById("overlay");
const Xmenu = document.getElementById("mobile-menu");
openbtn.addEventListener('click',navToggle)

function navToggle()
{
  openbtn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  Xmenu.classList.toggle("show-menu");
}


// to change counter-----------------------------------------------------------------


const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
let parallax_start = false;



document.addEventListener('scroll', scrollPage);


function scrollPage() {
  const scrollPos = window.scrollY;
  console.log(scrollPos);

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }

  function parallax(scrollPos){
  
    window.addEventListener("scroll", function(){
      leftItem.style.transform = "translateY("+(scrollPos-Ss)+"px)";
      textual.style.transform = "translateY(-"+(scrollPos-Ss)+"px)";})
    }
  
  
  function parallax2(scrollPos){
    
      window.addEventListener("scroll", function(){
        rightItem.style.transform = "translateY("+(scrollPos-Se)+"px)";})
  }

  // parallax
  let Se =  Wh*100/41;
  let Ss = Wh*100/70;
  let Pe = Wh*100/30;




  if (scrollPos > Ss && scrollPos<Se+400) {
    rightItem.style.opacity=0;
    parallax(scrollPos);
    scrollStarted = true;
  }if (scrollPos > Se) {
      leftItem.classList.add("fadeOut")
      rightItem.classList.add("fadeIn")
  }
  if(scrollPos>Se && scrollPos <Pe){
    parallax2(scrollPos);
  }

  if(scrollPos<Ss){
    leftItem.classList.remove("fadeOut")
    rightItem.classList.remove("fadeIn")
    parallax_start=false;
  }



}




function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 50;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}



function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}







// to  change slider ----------------------------------------------------------------------








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// lower slider ------------------------------------------------------------------





let l_slideIndex = 1;
l_showSlides(l_slideIndex);

function l_plusSlides(n) {
  l_showSlides(l_slideIndex += n);
}

function l_currentSlide(n) {
  l_showSlides(l_slideIndex = n);
}

function l_showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("FH-SL");
  if (n > slides.length) {l_slideIndex = 1}    
  if (n < 1) {l_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[l_slideIndex-1].style.display = "block";  
}





