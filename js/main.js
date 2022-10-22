let toggleButton = document.getElementsByClassName('toggle-button')[0]; 
let navMenu = document.getElementsByClassName('menu')[0];
let navIcons = document.getElementsByClassName('menu')[1];

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navIcons.classList.toggle('active')
})

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let background = document.getElementById('background');
let foreground = document.getElementById('foreground');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 0.75 + 'px';
  background.style.top = value * 0.5 + 'px';
  foreground.style.top = value * 0.0 + 'px';
})