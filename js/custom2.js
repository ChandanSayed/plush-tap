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
document.getElementById('contact').addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup('contactOverlay');
});
