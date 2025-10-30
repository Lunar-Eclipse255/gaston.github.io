let slideIndexPrototype = 1;

function changeSlidePrototype(n) {
  showSlidePrototype(slideIndexPrototype += n);
}

function currentSlidePrototype(n) {
  showSlidePrototype(slideIndexPrototype = n);
}

function showSlidePrototype(n) {
  let slides = document.getElementsByClassName("carousel-slide-prototype");
  let dots = document.getElementsByClassName("dot-prototype");
  
  if (n > slides.length) { slideIndexPrototype = 1 }
  if (n < 1) { slideIndexPrototype = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#5b6078";
  }
  
  slides[slideIndexPrototype - 1].style.display = "block";
  dots[slideIndexPrototype - 1].style.backgroundColor = "#c6a0f6";
}

