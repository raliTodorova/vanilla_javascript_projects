const products = [
  {
    name:'Ball Pein Hammer',
    category:'hammer',
    price:5,
    image:'./images/ball_pein_hammer.jpg'
  },
  {
    name:'Broad Axe',
    category:'axe',
    price:5,
    image:'./images/broad_axe.jpg'
  },
  {
    name:'Claw Hammer',
    category:'hammer',
    price:5,
    image:'./images/claw_hammer.jpg'
  },
  {
    name:'Club Hammer',
    category:'hammer',
    price:5,
    image:'./images/club_hammer.jpg'
  },
  {
    name:'Combination Wrench',
    category:'wrench',
    price:5,
    image:'./images/combination_wrench.jpg'
  },
  {
    name:'Flare Nut Wrench',
    category:'wrench',
    price:5,
    image:'./images/flare_nut_wrench.jpg'
  },
  {
    name:'Flat Screwdriver',
    category:'screwdriver',
    price:5,
    image:'./images/flat_screwdriver.jpg'
  },
  {
    name:'Flex Head Socket Wrench',
    category:'wrench',
    price:5,
    image:'./images/flex_head_socket_wrench.jpg'
  },
  {
    name:'Hand Saw',
    category:'saw',
    price:5,
    image:'./images/hand_saw.jpg'
  },
  {
    name:'Hatchet Axe',
    category:'axe',
    price:5,
    image:'./images/hatchet_axe.jpg'
  },
  {
    name:'Hex Key Screwdriver',
    category:'screwdriver',
    price:8.05,
    image:'./images/hex_key_screwdriver.jpg'
  },
  {
    name:'Hudson Bay Axe',
    category:'axe',
    price:15.65,
    image:'./images/hudson_bay_axe.jpg'
  },
  {
    name:'Japanese Saw',
    category:'saw',
    price:10,
    image:'./images/japanese_saw.jpg'
  },
  {
    name:'Phillips Screwdriver',
    category:'screwdriver',
    price:5.99,
    image:'./images/phillips_screwdriver.jpg'
  },
  {
    name:'Ratcheting Box Wrench',
    category:'wrench',
    price:10.05,
    image:'./images/ratcheting_box_wrench.jpg'
  },
  {
    name:'Sledge Hammer',
    category:'hammer',
    price:25.99,
    image:'./images/sledge_hammer.jpg'
  },
  {
    name:'Wrench',
    category:'wrench',
    price:10.99,
    image:'./images/wrench.jpg'
  }
]
const items = document.querySelector('.items')
const filters = document.querySelector('.filters')
const searchBar = document.querySelector('.search-bar input')




let filteredProducts=[...products];
addItemsToHTML(filteredProducts)
//filterProducts by categories
filters.addEventListener('click', (e)=>{
    filteredProducts = products.filter(product=>product.category===`${e.target.innerHTML}`)
    
    addItemsToHTML(filteredProducts)
    if(e.target.innerHTML==='all'){
      filteredProducts=[...products]
      addItemsToHTML(filteredProducts)
    }
})

searchBar.addEventListener('keyup', ()=>{
  let regEx=new RegExp(`${searchBar.value}+`,'gi')
  console.log(regEx.test('s'), regEx);
  products.forEach(product=>{
    if(regEx.test(product.name)){
      filteredProducts.push(product)
    } 
  })
    addItemsToHTML(filteredProducts)
})

  //dynamically add products to HTML
  function addItemsToHTML(array){
    items.innerHTML='';
    filteredProducts=[];
    array.forEach(product=>{
     items.innerHTML+=`<div class="item">
        <div class="img-container"><img src="${product.image}" alt="${product.name}"></div>
        <div class="details">
          <h4 class="item-name">${product.name}</h4>
          <h4><span class="price">${product.price}</span>  lv.</h4>
        </div> 
      </div>`

  })
  
  }
  

//Getting unique categories from the products object
let categories = [];
products.forEach(product=>{
  if(!categories.includes(product.category)){
    categories.push(product.category)
  }
  
})
 
//append categories to div.filters
  categories.forEach(function (category){
    let a = document.createElement('a');
    a.textContent = category;
    filters.appendChild(a)
  })


//Modals 
const modal = document.querySelector('.modal')
const exit = document.querySelector('.exit');
const item = document.querySelectorAll('.item')
console.log(modal.style.backgroundColor);

//toggle visibility
function toggleVisibility(el){
 if(el.classList.contains('visibility')){
   el.classList.remove('visibility')
 }else{
    el.classList.add('visibility')
 }
}

exit.addEventListener('click', ()=>{
  toggleVisibility(modal)
})
// console.log(item[0]);
// item.forEach(item=>{
//   item.addEventListener('click',()=>{
//   toggleVisibility(modal)
    
//   })
// })
item[0].addEventListener('click', ()=>{
  toggleVisibility(modal)
})