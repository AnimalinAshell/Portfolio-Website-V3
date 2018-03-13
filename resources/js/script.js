// Content Effects

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "resources/js/particles.json", function() {
  console.log("particles.js loaded");
});

// Nav sticky
$(document).ready(function() {
  setTimeout(function() {
    var sticky = new Waypoint.Sticky({ element: $(".nav")[0] });
    sticky.destroy();
    sticky = new Waypoint.Sticky({ element: $(".nav")[0] });
    // Content animations that would get set off at the wrong time
    $("#aboutTitle").waypoint({
      handler: function (direction) {
        $("#aboutTitle").removeClass("hidden");
        $("#aboutTitle").addClass("animated fadeInLeft");
      },
      offset: "55%"
    });
    $("#aboutTitle").waypoint({
      handler: function (direction) {
        $(".headShot, .aboutInfo").removeClass("hidden");
        $(".headShot").addClass("animated slideInUp");
        $(".aboutInfo").addClass("animated slideInDown");
      },
      offset: "35%"
    });
  }, 1000);
});

// Smooth scroll to content
$('nav a').on('click',function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:getRelatedContent(this).offset().top - 20});
});

// Helper functions
// Get div by href
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
  },
  offset: "18%"
});
$(".about").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#aboutNav").addClass("active");
  },
  offset: "18%"
});
$(".home").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#homeNav").addClass("active");
  },
  offset: '-.5%'
});
$(".portfolio").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#portfolioNav").addClass("active");
  },
  offset: "18%"
});
$(".contact").waypoint({
  handler: function(direction) {
    $(".nav > a").removeClass("active");
    $(".nav > a#contactNav").addClass("active");
  },
  offset: "18%"
});

// Content Animations on scroll
$("#skillsTitle").waypoint({
  handler: function(direction) {
    $("div.skillsContent i").removeClass("hidden");
    $("div.skillsContent i").addClass("animated flipInY");
  },
  offset: "35%"
});
$("#skillsTitle").waypoint({
  handler: function(direction) {
    $("#skillsTitle").removeClass("hidden");
    $("#skillsTitle").addClass("animated fadeInRight");
  },
  offset: "55%"
});
$("#portfolioTitle").waypoint({
  handler: function(direction) {
    $(".project").removeClass("hidden");
    $(".project").addClass("animated fadeInUp");
  },
  offset: "35%"
});
$("#portfolioTitle").waypoint({
  handler: function(direction) {
    $("#portfolioTitle").removeClass("hidden");
    $("#portfolioTitle").addClass("animated fadeInLeft");
  },
  offset: "55%"
});
$("#contactTitle").waypoint({
  handler: function(direction) {
    $(".contact h5, .contactForm").removeClass("hidden");
    $(".contact h5").addClass("animated fadeInUp");
    $(".contactForm").addClass("animated zoomIn");
  },
  offset: "35%"
});
$("#contactTitle").waypoint({
  handler: function(direction) {
    $("#contactTitle").removeClass("hidden");
    $("#contactTitle").addClass("animated fadeInDown");
  },
  offset: "55%"
});

