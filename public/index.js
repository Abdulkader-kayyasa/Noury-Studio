let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

var navbar = document.querySelector(".navbar") ; 
window.onscroll = function(){
  var top = window.scrollY ; 

  if(top >= 100){
    navbar.classList.add("scroll-nav-color");
  } else{
    navbar.classList.remove("scroll-nav-color");
  }
};






// ---------- CONTACT FORM ---------- // 

$(document).ready(function(){
	$('.frame').click(function(){
		$('.top').addClass('open');
		$('.message').addClass('pull');
	})
});
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  swal("Sent!", "Message Has Sent!", "success");
});

// $('#contact_form').html("<div id='message'></div>");
//         $('#message').html("<h2>Contact Form Submitted!</h2>")
//         .append("<p>We will be in touch soon.</p>")
//         .hide()
//         .fadeIn(1500, function() {
//           $('#message').append("<img id='checkmark' src='images/check.png' />");
//         });
// ------------- scroll ----------- //

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});





