// Content Effects

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "resources/js/particles.json", function() {
  console.log("particles.js loaded");
});

// Nav sticky
$(document).ready(function() {
  var sticky = new Waypoint.Sticky({ element: $(".nav")[0] });
  sticky.destroy();
  sticky = new Waypoint.Sticky({ element: $(".nav")[0] });
});

// Smooth scroll to content
$('nav a').on('click',function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:getRelatedContent(this).offset().top - 20});
});



// Helper functions
// Get section or article by href
function getRelatedContent(el){
  return $($(el).attr('href'));
}

// Waypoints
// Default cwaypoint settings
var wpDefaults={
  context: window,
  continuous: true,
  enabled: true,
  horizontal: false,
  offset: 0,
  triggerOnce: false
};

// Nav Active Switch while scroll
$(".skills").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#skillsNav").addClass("active");
  }
});
$(".about").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#aboutNav").addClass("active");
  }
});
$(".home").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#homeNav").addClass("active");
  },
  offset: '-20%'
});
$(".portfolio").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#portfolioNav").addClass("active");
  }
});
$(".contact").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#contactNav").addClass("active");
  }
});


