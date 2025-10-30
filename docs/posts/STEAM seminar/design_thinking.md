---
layout: sidebar
title: Design Thinking Project
id: design-thinking
---

## Hats for a Cause:

### Project Overview:
<figure style="float: right; margin: -1rem 0 1rem 1.5rem;">
  <img src="{{ site.baseurl }}/assets/images/steam/edp.png" alt="edp" width="200" style="border-radius: 8px; border: 1px solid #363a4f;"/>
  <figcaption style="color: #b8c0e0; font-size: 0.85em; margin-top: 0.5rem; font-style: italic; text-align: center;">Engineering Design Process</figcaption>
</figure>

For this project we were asked to design a hat using the Design Thinking process, to solve a real-world issue faced by a persona. We followed all five stages empathy, define, ideate, prototype, and test, in order to structure our work. Using this framework allowed us to stay on focus, rather than just jumping straight to a final solution. It also allowed us to come up with a borad range of ideas/solutions, rather than just one.

<br>

### Empathy:
<figure style="float: right; margin: -1rem 0 1rem 1.5rem;">
  <img src="{{ site.baseurl }}/assets/images/steam/persona.png" alt="George persona" width="200" style="border-radius: 8px; border: 1px solid #363a4f;"/>
  <figcaption style="color: #b8c0e0; font-size: 0.85em; margin-top: 0.5rem; font-style: italic; text-align: center;">Persona: George - Delivery Driver</figcaption>
</figure>

Our persona was George, a bike delivery driver who works long hours outdoors. By researching we discovered that bike delivery drivers experience exposure to sunlight and heat, night riding with poor visibility, poor weather, strain, and distracted drivers. We used each of these insights to inform each part of our final design. Such as brim to cover the sun, the plastic shield and heating/cooling pipes for the weather and temperature, or reflecter and lamps to make the biker more visible at night.

<br>

### Problem Definition:
To narrow down the problem in the define phase we created several Point of View (POV) statements and evaluated which one best addressed George's needs. The one we landed on was "How might we design a hat that allows delivery drivers to be seen better in low-visibility conditions and be safer on the road?" We chose this POV because both sfatey and visibilty were central to most bike delivery drivers' concerns.

<br>

### Ideation & Risk (Prototypes and sketch):
The ideation phase allowed us to brainstorm, and come up with ideas in which no idea was a bad idea. We thought of ideas like reflective surfaces, sound alerts, visors, built-in fans, lane-line illumination, crash sensors, and more. The most unconventional idea was a hat that could project light to show the bike’s path. Even though we didn’t pursue that ideas, exploring risky and "out of the box" ideas helped us to think creatively before narrowing down our ideas into something more realistic. Eventually, we combined multiple elements, such as lighting, reflectivity, rain & sun shielding, and temperature control into one idea/hat.

<br>

### Prototyping:
One key feature of our prototype was its reflective and light system. In order to have the biker be more visible at night the hat has a front and back mounted lamp, as well as a reflective strip on each side. We used silver pipe cleaners for the reflective strips, and half cut ping-pong balls for the lamps. We also used carboard for structure, pipe cleaners for heating/cooling pipes, and plastic bags for rain protection. These materials helped communicate the hat’s functionality, such as cardboard for rigidity and safety,plastic for weatherproofing, and shiny materials for visibility. Even as a prototype, these choices made the purpose clear.

<div class="carousel-container" style="max-width: 600px; margin: 2rem auto; position: relative;">
  <div class="carousel-slides">
    <img class="carousel-slide active" src="{{ site.baseurl }}/assets/images/steam/sketch_one.png" alt="Sketch 1" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f; display: block;">
    <img class="carousel-slide" src="{{ site.baseurl }}/assets/images/steam/sketch_two.png" alt="Sketch 2" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f; display: none;">
    <img class="carousel-slide" src="{{ site.baseurl }}/assets/images/steam/sketch_three.png" alt="Sketch 3" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f; display: none;">
    <img class="carousel-slide" src="{{ site.baseurl }}/assets/images/steam/sketch_four.png" alt="Sketch 4" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f; display: none;">
  </div>

  <button class="carousel-btn prev" onclick="changeSlide(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: #c6a0f6; color: #24273a; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 18px; font-weight: bold;">❮</button>
  <button class="carousel-btn next" onclick="changeSlide(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: #c6a0f6; color: #24273a; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 18px; font-weight: bold;">❯</button>

  <div class="carousel-dots" style="text-align: center; margin-top: 1rem;">
    <span class="dot active" onclick="currentSlide(1)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #c6a0f6; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
    <span class="dot" onclick="currentSlide(2)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #5b6078; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
    <span class="dot" onclick="currentSlide(3)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #5b6078; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
    <span class="dot" onclick="currentSlide(4)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #5b6078; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
  </div>
</div>

<script>
let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#5b6078";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "#c6a0f6";
}
</script>


<br>

### Iteration and Future Planning:
In the iteration phase we used feedback from when we presented the idea and prototype to the class. The most important change we’d make would be to add an adjustable strap to secure the hat during wind or movement. The strap is essential because it improves comfort and safety, key concerns for bike deliver drivers, and also ensuring the hat stays in place while riding in real-world conditions.

<br>

### Reflection:
The most challenging phase was ideation, because it required balancing creativity with realistic ideas. It was hard not to shoot down ideas that seem to far fetched, even though they later are discovered to be feasible. The Design thinking proccess is applicable to almost everything, in the future when devloping our EDP final project, I can start with empathy to make sure that my final solution acually helps people, by first understanding the users. Another helpful aspect is iterating the design based off testing where feedback helps to improve your work rather than just criticism, which is specifically applicable in robotics, with subsytems.

<br>

### Link to Hat Design Project Notebook:
[Notebook](https://docs.google.com/presentation/d/1UQI5ie9ZjemcLRWDiWy0Xm6VkzQDSZ2wSnxv40Eyrz0/edit?usp=sharing)