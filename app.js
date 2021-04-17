
const span = document.querySelector('.color');
const background = document.querySelector('body');
const button = document.querySelector('button');

const hexValues = [1,2,3,4,5,6,7,8,9,'A','B',"C",'D','E','F']

button.addEventListener('click', ()=>{
  let getHex = '#'
  for(let i=0;i<6;i++ ){
    getHex += hexValues[Math.floor(Math.random()*hexValues.length)]
  }
    span.innerHTML=getHex;
    span.style.color = getHex;
    background.style.backgroundColor = getHex;
 
})