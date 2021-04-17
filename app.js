const number = document.querySelector('.number')
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

let count = 0;
number.innerHTML = count;
const changeColor =()=>{
if(count<0){
  number.style.color = 'red'
}else if(count>0){
  number.style.color = 'green'
}else{
  number.style.color = 'black'
}
}

increase.addEventListener('click',()=>{
  count++
  number.innerHTML = count;
  changeColor()
} )
decrease.addEventListener('click',()=>{
  count--
  number.innerHTML = count;
  changeColor()
} )
reset.addEventListener('click',()=>{
  count=0;
  number.innerHTML = count;
  changeColor()
} )



