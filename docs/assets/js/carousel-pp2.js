let slideIndexPP2 = 1;

function changeSlidePP2(n) {
  showSlidePP2(slideIndexPP2 += n);
}

function currentSlidePP2(n) {
  showSlidePP2(slideIndexPP2 = n);
}

function showSlidePP2(n) {
  let slides = document.getElementsByClassName("carousel-slide-pp2");
  let dots = document.getElementsByClassName("dot-pp2");
  
  if (n > slides.length) { slideIndexPP2 = 1 }
  if (n < 1) { slideIndexPP2 = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#5b6078";
  }
  
  slides[slideIndexPP2 - 1].style.display = "block";
  dots[slideIndexPP2 - 1].style.backgroundColor = "#c6a0f6";
}

