import React from 'react'
import "./profile.css"
import $ from 'jquery'; 
const Profile = () => {
  React.useEffect(()=>{
    let menu = $(".menu li");
    menu.on("click", function () {
      let click_li = $(this);
    
      if (click_li.is(".selected")) {
        return;
      }
    
      click_li.addClass("selected");
      click_li.siblings("li").removeClass("selected");
      showContent(click_li);
    });
    
    function showContent(selected) {
      let content = $("section"),
        nonActualCard = content.find(".show-card");
    
      let nameCard = selected.attr("data-card"),
        nameCardId = "#" + nameCard,
        actualCard = content.find(nameCardId),
        boxArea = $("#box_area");
    
      nonActualCard
        .addClass("hide-card")
        .delay(1000)
        .queue(function () {
          actualCard.addClass("show-card");
          actualCard
            .siblings()
            .removeClass("show-card")
            .removeClass("hide-card")
            .dequeue();
        });
    
      boxArea.removeClass().addClass(nameCard + "-bg");
    }
    
  },[])
  return (
    <div class={"profile"}>
    
    <ul class="menu">
          <li data-card="card-martin" class="martin selected"></li>
          <li data-card="card-zara" class="zara"></li>
          <li data-card="card-bruce" class="bruce"></li>
          <li data-card="card-jim" class="jim"></li>
        </ul>
        
        <ul id="box_area" class="start">
          <li class="block"></li>
          <li class="block"></li>
          <li class="block"></li>
          <li class="block"></li>
          <li class="block"></li>
          <li class="block"></li>
        </ul>
        <section>
    
          <article id="card-martin" class="card show-card">
            <div class="card__inner">
              <div class="card__photo"></div>
              <h1 class="card__name">Martin</h1>
              <p class="card__about">
                Cheesecake jelly dragée toffee jelly
                chocolate bar. Croissant lollipop carrot 
                cake powder jelly-o lollipop sweet roll.
                Jelly beans dragée toffee toffee pastry muffin
                powder biscuit. 
                <span>more</span>
              </p>
            </div>
          </article>
          
          <article id="card-zara" class="card">
            <div class="card__inner">
              <div class="card__photo"></div>
              <h1 class="card__name">Zara</h1>
              <p class="card__about">
                Jelly-o jelly tart toffee. Cheesecake 
                jelly dragée toffee jelly
                sweet roll dragée toffee toffee 
                pastry muffin soufflé. 
                chocolate bar. Croissa ake powder jelly-o 
                lollipop Jelly beans dragée toffee toffee 
                pastry muffin powder biscuit. 
                <span>more</span>
              </p>
            </div>
          </article>
          
          <article id="card-bruce" class="card">
            <div class="card__inner">
              <div class="card__photo"></div>
              <h1 class="card__name">Bruce</h1>
              <p class="card__about">
                Jelly-o jelly tart toffee. Cheesecake 
                jelly dragée toffee jelly
                chocolate bar. Croissant lollipop 
                sweet roll soufflé.
                Jelly beans dragée toffee toffee pastry
                muffin powder biscuit. 
                <span>more</span>
              </p>
            </div>
          </article>
          
          <article id="card-jim" class="card">
            <div class="card__inner">
              <div class="card__photo"></div>
              <h1 class="card__name">Jim</h1>
              <p class="card__about">
                Jelly-o jelly tart toffee jelly dragée 
                toffee jelly chocolate baroiss llipop  powder 
                jelly-o lollipop sweet roll soufflé.
                Jelly beans dragée toffee er biscuit.
                Jelly-o jelly tart toffee. Cheesecake 
                jelly dragée toffee jelly 
                <span>more</span>
              </p>
            </div>
          </article>
          
        </section></div>
  )
}

export default Profile