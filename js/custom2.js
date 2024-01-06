 function scrollToSection(sectionId) {
   const section = document.getElementById(sectionId);
   if (section) {
     section.scrollIntoView({
       behavior: 'smooth'
     });
   }
 }


 const scrollButton = document.getElementById('toBottom');
 scrollButton.addEventListener('click', function (e) {
   e.preventDefault()
   scrollToSection('about');
 });

 const scrollButton2 = document.getElementById('contactBtn');
 scrollButton2.addEventListener('click', function (e) {
   e.preventDefault()
   scrollToSection('contact');
 });


// const privacyPopupBtn = document.getElementById('privacy');
// const privacyOverlay = document.getElementById('privacyOverlay');
// const closePopupPrivacy = document.getElementById('closePopupPrivacy');
//
// privacyPopupBtn.addEventListener('click', function (e) {
//   e.preventDefault()
//   privacyOverlay.style.display = 'flex';
// });
//
// closePopupPrivacy.addEventListener('click', function () {
//   privacyOverlay.style.display = 'none';
// });
//
//
// const termsPopupBtn = document.getElementById('terms');
// const termsOverlay = document.getElementById('termsOverlay');
// const closePopupTerms = document.getElementById('closePopupTerms');
//
// termsPopupBtn.addEventListener('click', function (e) {
//   e.preventDefault()
//   termsOverlay.style.display = 'flex';
// });
//
// closePopupTerms.addEventListener('click', function () {
//   termsOverlay.style.display = 'none';
// });


function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
  }
}

document.querySelectorAll('.close-popup').forEach(function(button) {
  button.addEventListener('click', function() {
    const overlayId = this.getAttribute('data-overlay');
    togglePopup(overlayId);
  });
});

// Event listeners for opening popups
document.getElementById('privacy').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('privacyOverlay');
});

document.getElementById('terms').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('termsOverlay');
});
document.getElementById('shipping').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('shippingOverlay');
});
document.getElementById('refund').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('refundOverlay');
});
document.getElementById('contact-form').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('contactOverlay');
});
document.getElementById('contact-form2').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('contactOverlay');
});


// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
   var $iframe = $wrapper.find(".js-videoIframe");
   var src = $iframe.data("src");
   // hide poster
   $wrapper.addClass("videoWrapperActive");
   // add iframe src in, starting the video
   $iframe.attr("src", src);
   $(".home-video-close").removeClass("is-hidden");
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
   // if we're stopping all videos on page
   if (!$wrapper) {
      var $wrapper = $(".js-videoWrapper");
      var $iframe = $(".js-videoIframe");
      // if we're stopping a particular video
   } else {
      var $iframe = $wrapper.find(".js-videoIframe");
   }
   // reveal poster
   $wrapper.removeClass("videoWrapperActive");
   // remove youtube link, stopping the video from playing in the background
   $iframe.attr("src", "");
   $(".home-video-close").addClass("is-hidden");
}

// Function to prevent double tap to play the video on touch devices. Hides poster image.
function touchVideo() {
   // Checks if #js-point-detector is made visible by the pointer:coarse media query
   var isVisible = $("#js-pointer-detector").is(":visible");
   // If it is visible...
   if (isVisible === true) {
      // Add active wrapper class
      $(".videoWrapper").addClass("videoWrapperActive");
      // Get video source
      var source = $(".js-videoIframe").data("src");
      // Load video source
      $(".js-videoIframe").attr("src", source);
   } else {
   }
}

// poster frame click event
$(document).on("click", ".js-videoPoster", function(ev) {
   ev.preventDefault();
   var $poster = $(this);
   var $wrapper = $poster.closest(".js-videoWrapper");
   videoPlay($wrapper);
});

$(document).ready(function() {
   touchVideo();
});

