// you only need to define the configuration settings you want to CHANGE. Omitted properties won't be affected.
gsap.config({
  nullTargetWarn: false,
});

$(document).ready(function () {
 

  $(".hero_logos").flickity({
    autoPlay: 4000,
    pauseAutoPlayOnHover: false,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    imagesLoaded: true,
  });
  $(".colocs_carousel").flickity({
    autoPlay: 4000,
    pauseAutoPlayOnHover: false,
    pageDots: false,
    prevNextButtons: true,
    wrapAround: false,
    imagesLoaded: true,
    arrowShape: {
      x0: 25,
      x1: 60,
      y1: 20,
      x2: 60,
      y2: 0,
      x3: 40,
    },
  });


});
$(document).ready(function(){if($(".opportunite_heading").length){let tickerSpeed=2;let flickity=null;let isPaused=!1;const slideshowEl=document.querySelector(".opportunite_heading");const update=()=>{if(isPaused)return;if(flickity.slides){flickity.x=(flickity.x-tickerSpeed)%flickity.slideableWidth;flickity.selectedIndex=flickity.dragEndRestingSelect();flickity.updateSelectedSlide();flickity.settle(flickity.x)}
window.requestAnimationFrame(update)};const pause=()=>{isPaused=!0};const play=()=>{if(isPaused){isPaused=!1;window.requestAnimationFrame(update)}};flickity=new Flickity(slideshowEl,{autoPlay:!1,prevNextButtons:!0,pageDots:!1,draggable:!0,wrapAround:!0,selectedAttraction:0.015,friction:0.25,prevNextButtons:!1,groupCells:!0,imagesLoaded:!0,});flickity.x=0;slideshowEl.addEventListener("mouseenter",pause,!1);slideshowEl.addEventListener("focusin",pause,!1);slideshowEl.addEventListener("mouseleave",play,!1);slideshowEl.addEventListener("focusout",play,!1);flickity.on("dragStart",()=>{isPaused=!0});update()}});

const titles = gsap.utils.toArray("section");

titles.forEach((text, i) => {
  gsap.fromTo(
    text,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: text,
        toggleActions: "play",
        start: "top 70%",
      },
    }
  );
});
gsap.fromTo(
  "main #hero h1 span",
  { opacity: 0, y: 20 },
  {
    ease: Power1.easeInOut,
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
  }
);
gsap.fromTo(
  ".side_illustration ",
  { y: 20 },

  {
    ease: Power1.easeInOut,
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    stagger: { each: 0.2 },
  }
);

/*******journal*********** */
$(document).ready(function () {
  var slider = $("#insightslist");
  var filterButtons = $(".filterButtons");

  function flicitySlider() {
    //init flickity
    slider.flickity({
      autoPlay: false,
      pauseAutoPlayOnHover: true,
      pageDots: false,
      prevNextButtons: false,
      wrapAround: false,
      imagesLoaded: true,
      groupCells: 1,
    });
  }

  flicitySlider();

  //when filter buttons clicked
  filterButtons.on("click", "button", function () {
    //use data-filter attribute & class for filtering
    var filterValue = $(this).attr("data-filter");
    var slide = slider.find(".slide");

    if (filterValue == "all") {
      // if all show all
      slide.fadeIn(250);
      slide.addClass("flickity");
    } else {
      //set active slide
      var active = $("." + filterValue).fadeIn(450);
      // show only slide with the same class as the button "attr('data-filter')"
      slide.addClass("flickity");
      slide.not(active).removeClass("flickity");
      slide.not(active).hide();
    }

    // destroy slider so we can rebuild with new filters
    slider.flickity("destroy");

    //rebuild slider with new images
    flicitySlider();

    // remove active class from all buttons
    $(".filterButton").removeClass("active");

    // add active class to active button
    $(this).addClass("active");
  });
});