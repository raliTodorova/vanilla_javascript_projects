const testimonials = [
  {
    name:'Merry Berry',
    image:'./merry_berry.jpg',
    text:'Sweetest thing I`ve ever tasted. Can stop licking my fingers... Help!',
    stars:5
  },
  {
    name:'Gordon Ramsay',
    image:'./gordon_ramsay.jpg',
    text:'Actually pretty good. Keep up the good work! Incredible!',
    stars:4
  },
  {
    name:'Jamie Oliver',
    image:'jamie_oliver.jpg',
    text:'Honestly I`d probably do it much better...and quicker...like in 30 minutes max! ',
    stars:1
  },
  {
    name:'Paul Hollywood',
    image:'paul_hollywood.jpg',
    text:'I don`t even like sweets that much. But this was okay',
    stars:4
  },
  {
    name:'Prue Leith',
    image:'prue_leith.jpg',
    text:'Truly lost for words...Seriously I don`t know what to say. It was okay?',
    stars:3
  }
]

const author = document.querySelector('.name');
const text = document.querySelector('.quote');
const starsContainer = document.querySelector('.stars');
const star = document.querySelector('#star');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const imgContainer = document.querySelector('.img-container')


let index = 0;
let img = document.createElement('img');

function changeUser(){
  author.innerHTML=testimonials[index].name;
  text.innerHTML = testimonials[index].text;
  img.src=testimonials[index].image;
  imgContainer.appendChild(img);
   starsContainer.innerHTML=''
  for(let i=1; i<=testimonials[index].stars; i++){
    starsContainer.innerHTML+='<i class="fas fa-star"></i>'
  } 
  
}


changeUser();


rightBtn.addEventListener('click', ()=>{
  if(index<testimonials.length-1){
    index++; 
  }else if(index>=testimonials.length-1){
    index=0;
  }
  changeUser();
  
 
})
leftBtn.addEventListener('click', ()=>{
  if(index>0){
    index--; 
  }else if(index===0){
    index=testimonials.length-1;
  }
  changeUser();

})



