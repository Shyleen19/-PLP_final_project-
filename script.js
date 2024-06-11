const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar)  {
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}
const buttons = document.querySelectorAll('.normal');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    
    alert('Button clicked!');
  });
});


const whiteButtons = document.querySelectorAll('.white');


whiteButtons.forEach(button => {
  button.addEventListener('click', function() {
    
    alert('White button clicked!');
  });
});

