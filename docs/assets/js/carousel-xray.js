let slideIndexXray = 1;

function changeSlideXray(n) {
  showSlideXray(slideIndexXray += n);
}

function currentSlideXray(n) {
  showSlideXray(slideIndexXray = n);
}

function showSlideXray(n) {
  let slides = document.getElementsByClassName("carousel-slide-xray");
  let dots = document.getElementsByClassName("dot-xray");
  
  if (n > slides.length) { slideIndexXray = 1 }
  if (n < 1) { slideIndexXray = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#5b6078";
  }
  
  slides[slideIndexXray - 1].style.display = "block";
  dots[slideIndexXray - 1].style.backgroundColor = "#c6a0f6";
}

