
let toggleNavStatus = false;

let toggleNav = function() {
  let getToogleMenu = document.querySelector("#Toggle-menu");
  let getMenuIcon = document.querySelector("#Logo-title-container");

  if (toggleNavStatus === false) {
    getToogleMenu.style.marginRight = "0";
    getMenuIcon.style.border = "";
    getMenuIcon.classList.add("ClassWithX");
    getMenuIcon.classList.remove("ClassWithMenu");

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getToogleMenu.style.marginRight = "-100%";
    getMenuIcon.style.border = "";
    getMenuIcon.classList.add("ClassWithMenu");
    getMenuIcon.classList.remove("ClassWithX");

    toggleNavStatus = false;
  }
};

// Carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Picture-container");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//Jquery smooth scrooling

// Add Close effect

// Add preview to services
let getWrapperOfPictures = document.getElementById(
  "Pictures-of-preview-wrapper"
);

//---------Haircut and style
let getPictureForService3 = document.querySelector("#FirstServiceImage");
let getPictureForService3ServiceBtn = document.querySelector(
  "#FirstServiceImage p"
);
let getService3 = document.querySelector("#PIC-3");

getService3.addEventListener("click", function() {
  getPictureForService3.style.transform = "scale(1)";
  getWrapperOfPictures.classList.add("Preview-wrapper");
});

getPictureForService3ServiceBtn.addEventListener("click", function() {
  getPictureForService3.style.transform = "scale(0)";
  getWrapperOfPictures.classList.remove("Preview-wrapper");
});

//---------Skin and fade
let getPictureForService6 = document.querySelector("#SecondServiceImage");
let getPictureForService6ServiceBtn = document.querySelector(
  "#SecondServiceImage p"
);
let getService6 = document.querySelector("#PIC-6");

getService6.addEventListener("click", function() {
  getPictureForService6.style.transform = "scale(1)";
  getWrapperOfPictures.classList.add("Preview-wrapper");
});

getPictureForService6ServiceBtn.addEventListener("click", function() {
  getPictureForService6.style.transform = "scale(0)";
  getWrapperOfPictures.classList.remove("Preview-wrapper");
});
//---------Hot Towel Shave

//---------Beard Trim
let getPictureForService2 = document.querySelector("#FourthServiceImage");
let getPictureForService2ServiceBtn = document.querySelector(
  "#FourthServiceImage p"
);
let getService2 = document.querySelector("#PIC-2");

getService2.addEventListener("click", function() {
  getPictureForService2.style.transform = "scale(1)";
  getWrapperOfPictures.classList.add("Preview-wrapper");
});

getPictureForService2ServiceBtn.addEventListener("click", function() {
  getPictureForService2.style.transform = "scale(0)";
  getWrapperOfPictures.classList.remove("Preview-wrapper");
});
//---------Teens 13 to 16
let getPictureForService1 = document.querySelector("#FifthServiceImage");
let getPictureForService1ServiceBtn = document.querySelector(
  "#FifthServiceImage p"
);
let getService1 = document.querySelector("#PIC-1");

getService1.addEventListener("click", function() {
  getPictureForService1.style.transform = "scale(1)";
  getWrapperOfPictures.classList.add("Preview-wrapper");
});

getPictureForService1ServiceBtn.addEventListener("click", function() {
  getPictureForService1.style.transform = "scale(0)";
  getWrapperOfPictures.classList.remove("Preview-wrapper");
});
//---------Kids 12&under
let getPictureForService5 = document.querySelector("#SixthServiceImage");
let getPictureForService5ServiceBtn = document.querySelector(
  "#SixthServiceImage p"
);
let getService5 = document.querySelector("#PIC-5");

getService5.addEventListener("click", function() {
  getPictureForService5.style.transform = "scale(1)";
  getWrapperOfPictures.classList.add("Preview-wrapper");
});

getPictureForService5ServiceBtn.addEventListener("click", function() {
  getPictureForService5.style.transform = "scale(0)";
  getWrapperOfPictures.classList.remove("Preview-wrapper");
});
//---------O.A.P.



// Add fading effect on text

let getTextElements = document.querySelectorAll(".opacity-effect");
document.addEventListener("scroll", function() {
  let getViewportHeight = window.innerHeight;

  for (let i = 0; i < getTextElements.length; i++) {
    let currentElement = getTextElements[i];
    let rectPos = currentElement.getBoundingClientRect();
    let getHeightOfElement =
      rectPos.top + document.documentElement.scrollTop - getViewportHeight;
    console.log(getHeightOfElement);
    if (getHeightOfElement < window.pageYOffset) {
      currentElement.classList.remove("transition-effect-fade-out");
      currentElement.classList.add("transition-effect");
    } else {
      currentElement.classList.remove("transition-effect");
      currentElement.classList.add("transition-effect-fade-out");
    }
  }
});

let a = document.querySelector("#Opening-hours-background-image-cont");
a.addEventListener("click", function() {
  let rectPos = a.getBoundingClientRect();
  console.log(rectPos);
  console.log(window.pageYOffset);
  console.log(window.scrollY);
});
