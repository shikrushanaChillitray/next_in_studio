import React from 'react'
import "./pepsi.css"

const pepsi = () => {
  return (
    <div class="details">
       

    
  <section class="services">
    <div class="services__box">
      <figure class="services__icon" style={{background:"#4eb7ff"}} >
        <ion-icon name="color-palette-outline"></ion-icon>
      </figure>
      <div class="services__content">
        <h2 class="services__title">
         Game Design
        </h2>
        <p class="services__description">
        Game design is the art of applying design and aesthetics to create a game for entertainment or for educational, exercise, or experimental purposes. </p>
      </div>
    </div>
    <div class="services__box">
      <figure class="services__icon" style={{background:"#fd6494"}} >
        <ion-icon name="code-slash-outline"></ion-icon>
      </figure>
      <div class="services__content">
        <h2 class="services__title">
        Coding
        </h2>
        <p class="services__description">
        C++ is an object-oriented programming language. Its speed, ease of use, and widespread adoption make it stand out as a highly desirable language. </p>
      </div>
    </div>
    <div class="services__box">
      <figure class="services__icon" style={{background:"#43f390"}} >
        <ion-icon name="search-outline"></ion-icon>
      </figure>
      <div class="services__content">
        <h2 class="services__title">
          SEO
        </h2>
        <p class="services__description">
        The short answer is SEO is very effective  not just to generate traffic but also leads and sales. </p>
      </div>
    </div>
    <div class="services__box">
      <figure class="services__icon" style={{background:"#cd57ff"}}>
        <ion-icon name="bar-chart-outline"></ion-icon>
      </figure>
      <div class="services__content">
        <h2 class="services__title">
          Marketing Digital
        </h2>
        <p class="services__description">
        A video game is an electronic game that can be played on a computing device, such as a personal computer, gaming console or mobile phone.
        </p>
      </div>
    </div>
    <div class="services__box">
      <figure class="services__icon" style={{background:"goldenrod"}} >
        <ion-icon name="videocam-outline"></ion-icon>
      </figure>
      <div class="services__content">
        <h2 class="services__title">
          Video rendring
        </h2>
        <p class="services__description">
        Rendering is the process of computing an image from contents of a scene. In a game engine like Unity, rendering is something that you want to happen 60 times per second
        </p>
      </div>
    </div>
    <div class="services__box">
      <figure class="services__icon" style={{background:"yellow"}}>
        <ion-icon name="game-controller-outline"></ion-icon>
      </figure>
      <div class="services__content">
        <h2 class="services__title">
         Games
        </h2>
        <p class="services__description">
        a contest or sport played according to rules with the players in direct opposition to each other
        </p>
      </div>
    </div>
  </section>
  
</div>
  )
}

export default pepsi