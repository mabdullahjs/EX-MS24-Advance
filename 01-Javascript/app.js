let mobiles = [
  {
    name: "a30",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 2000,
    brand: "samsung",
  },
  {
    name: "note10",
    ram: "6gb",
    rom: "128gb",
    camera: "50px",
    price: 4000,
    brand: "samsung",
  },
  {
    name: "s10",
    ram: "3gb",
    rom: "128gb",
    camera: "10px",
    price: 5000,
    brand: "samsung",
  },
  {
    name: "iphone4",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "iphone",
  },
  {
    name: "iphone4s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 20000,
    brand: "iphone",
  },
  {
    name: "iphone5",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 30000,
    brand: "iphone",
  },
  {
    name: "iphone6",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 30000,
    brand: "iphone",
  },
  {
    name: "redminote10",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "redminote11",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "redmi10",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "redmi10pro",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    name: "a3s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "oppo",
  },
  {
    name: "a3s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "Realmi",
  },
];


//higher order function
//call back function

const div = document.querySelector('div');

mobiles.map((item , index)=>{
    div.innerHTML += `
    <h1>${item.name}</h1>
    <h1>${item.price}</h1>
    <button onclick="hello(${index})">add to cart</button>
    <hr/>
    `
})


function hello(index){
    console.log(mobiles[index]);
}

















// const h1 = document.querySelector('.head');
// const btn = document.querySelector('#btn');


// btn.addEventListener('click' , function(){
//     h1.innerHTML = 'changed through javascript'
// })
















// function hello(username){
//     console.log(`hello ${username}`);
// }

// hello('abdullah')














// const hello = (username)=>{
//     console.log(`hello ${username}`);
//     return `hello ${username}`
// }
// console.log(hello('abdullah')); // undefined

























//https://fakestoreapi.com/

// fake api ka through data mangwana haa. isko appna simple card ma render krwana haa. jaisa hi add to cart pa click kronga ma to wohi wala object console ma show hojayge!











