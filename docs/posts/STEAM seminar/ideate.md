---
layout: sidebar
title: Ideate
id: ideate
---

### Introduction: 
This part is the ideation phase in which I will start by coming up with a variety of ideas to solve my problem Statement, then ending with just one idea. This phase is important because it allows me to throw down a bunch of ideas no matter how feasible they are then be able to pick just one. For my ideation phase my problem statement was: "How can I make advanced math and computer science concepts (like probabilistic algorithms) more accessible and easier for high school students to understand?"

### The Brainstorming Process:
I generated my ideas by taking 20 minutes to write down any idea on Figjam that I could think of. My mindset wasn't to think of what was possible and instead I was just thinking of what could solve the problem.

<br>
<br>

<figure style="float: right; margin: -1rem 0 1rem 1.5rem;">
  <img src="{{ site.baseurl }}/assets/images/steam/figjam.png" alt="FigJam Brainstorming" width="500" style="border-radius: 8px; border: 1px solid #363a4f;"/>
  <figcaption style="color: #b8c0e0; font-size: 0.85em; margin-top: 0.5rem; font-style: italic; text-align: center;">FigJam Brainstorming Session</figcaption>
</figure>
<br>
<br>

<div style="clear: both;"></div>

### Narrowing the Focus:
I moved from many ideas to one idea by first choosing my three favorite ideas. Then I used a selection matrix to narrow it down to one idea. The matrix had 5 criteria all out of five, and with the criteria being, Impact, Feasibility, Innovation, SDG Alignment, and STEAM Alignment. After that I created a persona to better understand the person who would use my final solution. I also created a project stoy and layed out a blueprint for my future work.


### Proposed Solution: 
My proposed solution is a research paper with code implementation going through and explaining a complex idea. In which I will choose a certain advanvced computer science or math topic and in a research paper I will explain such a topic at a more high school level, removing the technical jargon and explaining complex topics while keeping the same level of precision. This paper will also be linked with the code for that topic, where the code will be integrated throughout the paper but also included at the end. 

In my Three frame narrative I did this through the perspective of a robotics student because that was the persona I viewed the proposed solution through. In the before the student is struggling with an autonomous movement for their robot because it is being imprecise. They then proceed to look up ways to increase precision, but all they find are graduate level papers with jargon and advanced topics. They know other students were able to do it so it's not beyond their skill level there is just a high barrier to entry. The during is when they would use my paper, which would reduce the barrier by explaining everything in more detail but at a high school level, so the student is able to get the same amount of information but is able to understand more. The after is when they are able to implement this advanced topic and their robot becomes mroe precise. 

<br>
<br>
<figure style="float: right; margin: -1rem 0 1rem 1.5rem;">
  <img src="{{ site.baseurl }}/assets/images/steam/three_frame.jpg" alt="3 Frame Narrative" width="500" style="border-radius: 8px; border: 1px solid #363a4f;"/>
  <figcaption style="color: #b8c0e0; font-size: 0.85em; margin-top: 0.5rem; font-style: italic; text-align: center;">Three Frame Narrative</figcaption>
</figure>
<br>
<br>

<div style="clear: both;"></div>

### X-Ray Views:
Below is the X-Ray views of my paper in two parts. The first part outlines every topic that will be covered in the paper as well as whether that section will include code snippits. The second part is a control diagram of the code/math itself:

<div class="carousel-container" style="max-width: 600px; margin: 2rem auto; position: relative;">
  <div class="carousel-slides-xray">
    <div class="carousel-slide-xray active" style="display: block;">
      <img src="{{ site.baseurl }}/assets/images/steam/paper_outline.png" alt="Paper Outline" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f;">
      <p class="carousel-caption" style="text-align: center; color: #b8c0e0; font-size: 0.9em; margin-top: 0.5rem; font-style: italic;">Paper Outline</p>
    </div>
    <div class="carousel-slide-xray" style="display: none;">
      <img src="{{ site.baseurl }}/assets/images/steam/control_diagram.jpeg" alt="Code Control Diagram" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f;">
      <p class="carousel-caption" style="text-align: center; color: #b8c0e0; font-size: 0.9em; margin-top: 0.5rem; font-style: italic;">Code Control Diagram</p>
    </div>
  </div>

  <button class="carousel-btn-xray prev" onclick="changeSlideXray(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: #c6a0f6; color: #24273a; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 18px; font-weight: bold;">❮</button>
  <button class="carousel-btn-xray next" onclick="changeSlideXray(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: #c6a0f6; color: #24273a; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 18px; font-weight: bold;">❯</button>

  <div class="carousel-dots-xray" style="text-align: center; margin-top: 1rem;">
    <span class="dot-xray active" onclick="currentSlideXray(1)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #c6a0f6; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
    <span class="dot-xray" onclick="currentSlideXray(2)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #5b6078; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
  </div>
</div>

<script src="{{ site.baseurl }}/assets/js/carousel-xray.js"></script>

### Conclusion: 

My next steps will be to work on researching the topic more, as well as fleshing out the outline with content to work on the paper itself. I also will be working towards coding Monte Carlo Localization and implementing it on a robot for demonstrations. I think I might encounter problems in the implementation and in publishing the paper. I don't think I need support in any area at the moment.