const input = document.querySelector('input');
const form = document.querySelector('form');
const output = document.querySelector('.message')
const error = document.querySelector('.error')
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  if(!input.value){
    error.innerHTML = 'You MUST type a message first' 
    setTimeout(()=>{
     error.innerHTML = '' 
    }, 2000)
  } else{
    output.innerHTML = input.value;
    input.value = '';
  }
  
  
})