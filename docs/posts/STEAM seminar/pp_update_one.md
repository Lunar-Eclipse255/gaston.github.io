---
layout: sidebar
title: Portfolio Update 1
id: pp-1
---



 

### Progress Overview:
What I've been able to tackle in the past three weeks, was the full coding of the Monte Carlo Localization code. Including both the main loop and the raycasting. I was also able to tune the sensors and start to work on the noise. Lastly I have also worked on the introduction pages to my paper. I am most proud ofgetting the Monte carlo Localization code to work on a physical robot.

<div class="carousel-container" style="max-width: 600px; margin: 2rem auto; position: relative;">
  <div class="carousel-slides-pp1">
    <div class="carousel-slide-pp1 active" style="display: block;">
      <img src="{{ site.baseurl }}/assets/images/steam/mcl.png" alt="Monte Carlo Localization" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f;">
      <p class="carousel-caption" style="text-align: center; color: #b8c0e0; font-size: 0.9em; margin-top: 0.5rem; font-style: italic;">Monte Carlo Localization</p>
    </div>
    <div class="carousel-slide-pp1" style="display: none;">
      <img src="{{ site.baseurl }}/assets/images/steam/raycast.png" alt="Raycasting" style="width: 100%; border-radius: 8px; border: 1px solid #363a4f;">
      <p class="carousel-caption" style="text-align: center; color: #b8c0e0; font-size: 0.9em; margin-top: 0.5rem; font-style: italic;">Raycasting</p>
    </div>
  </div>

  <button class="carousel-btn-pp1 prev" onclick="changeSlidePP1(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: #c6a0f6; color: #24273a; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 18px; font-weight: bold;">❮</button>
  <button class="carousel-btn-pp1 next" onclick="changeSlidePP1(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: #c6a0f6; color: #24273a; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-size: 18px; font-weight: bold;">❯</button>

  <div class="carousel-dots-pp1" style="text-align: center; margin-top: 1rem;">
    <span class="dot-pp1 active" onclick="currentSlidePP1(1)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #c6a0f6; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
    <span class="dot-pp1" onclick="currentSlidePP1(2)" style="height: 12px; width: 12px; margin: 0 5px; background-color: #5b6078; border-radius: 50%; display: inline-block; cursor: pointer;"></span>
  </div>
</div>

<script src="{{ site.baseurl }}/assets/js/carousel-pp1.js"></script>



### Experts & Mentors: 
I was trying to contact Davis these past weeks, we were having issues and we finally fixed them but he hasn't responded. So I think I will move forward with Ms. B and circle back to Davis if he becomes available. 

 

### Roadblocks & Resolutions: 
Some issues, I've been having are withs cheduling my initial interview, and fully getting Monte Carlo Noise to work. I am going to solve the issue regarding my initial interview by switch my primary interview to Ms. B. The secondary issue is caused by the particle filter struggling to work around the middle goal, so I will try to remedy this by adding more line segments when raycasting and adding more variance to the odometry matrix. 

 

### Reflection: 
I am feeling good about my projects and I feel like I am on track. I felt most productive when i was finally able to get partial MCL to work, in certain areas of the field. I also believe I have made adequate progress in the past three weeks. 
How are you doing? Take a moment to check in with yourself. These prompts are here to help think critically about your progress and work habits. Your responses don't have to be long—just 2–3 honest sentences for each is fine. This section is meant to encourage you to think deeply about how you are working, not just what you are producing.

 