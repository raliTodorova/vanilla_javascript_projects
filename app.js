const imgContainer = document.querySelector('.img-container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const images = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg','./images/10.jpg']

const image = document.createElement('img')


image.src = images[0]

imgContainer.appendChild(image)
let index = 0;
right.addEventListener('click', ()=>{
  index++;
  if(index>images.length-1){
    index=0;
  }
  changePicture()
  
})
left.addEventListener('click', ()=>{
  index--;
  if(index<0){
    index=9;
  }
  changePicture()
  
})

function changePicture(){
  image.src = images[index];
  imgContainer.appendChild(image)
}