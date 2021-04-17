const span = document.querySelector('.color');
const background = document.querySelector('body');
const button = document.querySelector('button');

const colors = ['aquamarine','cadetblue','crimson','red','blueviolet', 'green', 'blue', 'black', 'brown', 'orange', 'olivedrab', 'yellow', 'beige', 'peachpuff']

button.addEventListener('click', ()=>{
 const randomNumber = Math.floor(Math.random()*colors.length)
 background.style.backgroundColor = colors[randomNumber]
 span.innerHTML = colors[randomNumber]
 span.style.color = colors[randomNumber]
})