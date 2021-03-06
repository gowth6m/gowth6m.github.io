// ---------------------------------------------
// Hamburger Menu Code -------------------------
// ---------------------------------------------

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');

burgerMenu.addEventListener('click', ()=> {
  navLinks.classList.toggle('open');

  // links.forEach(link => {
  //   link.classList.toggle('fade');
  // })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
});

link1.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})
link2.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})
link3.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})

link4.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})

// ========================================================
// Parallax stuff
// ========================================================
$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();
  
  $('.parallax-bg').css('background-position','left '+(wScroll*0.55)+'px')

  $('.parallax-bg2').css('background-position','center '+(wScroll*0.45)+'px')

  $('.parallax-bg3').css('letter-spacing' +(wScroll*0.8)+'px')

  $('.plax').css('transform', 'translate(0px,+'+(wScroll*0.25)+'px')
  $('.plax1').css('transform', 'translate(0px,-'+(wScroll*0.2)+'px')
  $('.plax2').css('transform', 'translate(0px,+'+(wScroll*0.3)+'px')
  $('.plax3').css('transform', 'translate(0px,+'+(wScroll*0.55)+'px')
  $('.plax4').css('transform', 'translate(0px,+'+(wScroll*0.55)+'px')
}