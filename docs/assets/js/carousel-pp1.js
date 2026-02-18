let slideIndexPP1 = 1;

function changeSlidePP1(n) {
  showSlidePP1(slideIndexPP1 += n);
}

function currentSlidePP1(n) {
  showSlidePP1(slideIndexPP1 = n);
}

function showSlidePP1(n) {
  let slides = document.getElementsByClassName("carousel-slide-pp1");
  let dots = document.getElementsByClassName("dot-pp1");
  
  if (n > slides.length) { slideIndexPP1 = 1 }
  if (n < 1) { slideIndexPP1 = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#5b6078";
  }
  
  slides[slideIndexPP1 - 1].style.display = "block";
  dots[slideIndexPP1 - 1].style.backgroundColor = "#c6a0f6";
}

