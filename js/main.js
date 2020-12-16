$(window).scroll(function() {
    parallax();
  })
  
  function parallax() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position','left '+(wScroll*0.55)+'px')
  
    $('.parallax-bg2').css('background-position','center '+(wScroll*0.45)+'px')
  
    $('.parallax-bg3').css('letter-spacing' +(wScroll*0.8)+'px')
  
    $('.plax').css('transform', 'translate(0px,+'+(wScroll*0.85)+'px')
    $('.plax1').css('transform', 'translate(0px,+'+(wScroll*0.6)+'px')
    $('.plax2').css('transform', 'translate(0px,+'+(wScroll*0.1)+'px')
    $('.plax3').css('transform', 'translate(0px,+'+(wScroll*0.7)+'px')
    $('.plax4').css('transform', 'translate(0px,+'+(wScroll*1.7)+'px')
  }

//   ===================
//   CLOCK
//   ===================

// Set the date we're counting down to
var countDownDate = new Date("Dec 18, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

