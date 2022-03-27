import React from 'react'
import "./game.css"
const Game = () => {
  
  return (
    <div className='comming'>
   <main id="main">
  <div class="mobile">
    <div class="mobile_contact">
      <div class="header">
        <div class="logo"></div>
        <span>Next In Studio</span>
      </div>
      <div class="content_data">
        <h1><span>We're</span><span>coming soon!</span></h1>
        <p class="text">We also align technology and tools with our digital distribution platform to create solutions that enhance our games and empower various teams within Next In – including development, marketing, security, and customer support – to engage with our players.</p> <div class="mobile_contact">
          <div class="social-links">
            <p>Connect with us on social media for updates: </p>
            <ul class="social-ul">
              <li class="social-li">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png' height={30} width={30}/>
              </li>
              <li class="social-li">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' height={30} width={30}/>
              </li>
              <li class="social-li">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png' height={30} width={30}/>
             
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</main></div>
  )
}

export default Game