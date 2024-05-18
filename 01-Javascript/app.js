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

// const div = document.querySelector('div');

// mobiles.map((item , index)=>{
//     div.innerHTML += `
//     <h1>${item.name}</h1>
//     <h1>${item.price}</h1>
//     <button onclick="hello(${index})">add to cart</button>
//     <hr/>
//     `
// })


// function hello(index){
//     console.log(mobiles[index]);
// }

















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



















// const fruits = ['mango' , 'banana' , 'orange' , 'watermelon' , ['guawa' , {
//   username: 'abdullah',
//   hobbies:['cricket' , 'swimming' , 'cooking']
// }]]

// console.log(fruits[4][1].hobbies[2])












//spread operator


// const students = ['abdullah' , 'usman' , 'ali'];
// const students2 = ['ibad' , 'farooq' , 'adil'];

// const thirdArr = [...students2 , ...students ]
// console.log(thirdArr)







//rest operator

// function hello (...arg){
//   console.log(arg)
// }

// hello('abdullah' , 'usman' , 'ammar' , {} , [] , true , undefined , null)


//ternary operator


// const totalMarks = 65;

// if (totalMarks >= 90) {
//   console.log('A grade')
// } else if (totalMarks >= 70) {
//   console.log('B grade');
// } else if(totalMarks >= 60){
//   console.log('C grade')
// }
// else {
//   console.log('fail hogaya');
// }

// totalMarks >= 90 ? console.log('A grade') : totalMarks >= 70 ? console.log('B grade') :
// totalMarks >= 60 ? console.log('C grade') : 
// console.log('fail hogaya');























//object destructuring

// const user = {
//   username: 'abdullah',
//   age: 21,
//   email:'mabdullah2037@gmail.com',
//   hobbies: ['cricket' , 'swimming']
// }

// const {username , age , email , hobbies} = user
// console.log(username);





//Array Destructuring

// const students = ['abdullah' , 'usman' , 'ali'];
// // const [username , username2 , username3] = students
// const [,, username3] = students
// console.log(username3)


// const [phone1 , , , , , , ,phone6] = mobiles;
// console.log(phone6);









//object methods

// const user = {
//   username: 'abdullah',
//   age: 21,
//   email:'mabdullah2037@gmail.com',
//   hobbies: ['cricket' , 'swimming']
// }
// user.extrakey = 'abc'
// delete user.age
// console.log(user);

// const userArr = Object.entries(user);
// console.log(userArr[3][1][1]);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// Object.freeze(user)
// delete user.username
// console.log(user.extrakey);


































































//closures

// function outerFunction(){
//   let a = 1;
//   function innerfunc1(){
//     let b = 10
//     console.log(a);
//   }
//   function innerfunc2(){
//     console.log(a);
//     console.log(b)
//   }
//   return innerfunc2 
// }

// outerFunction()()
// const val = outerFunction()
// val()













// try catch


// let a = 10; //global variable

// function hello() {
//   let b = 20; // local variable
//   console.log(a);
// }
// try {
//   console.log(b);
// } catch (error) {
//   console.error('error araha ha' , error)
// }
// hello()





// const hello = function (){
//   console.log('hello world!')
// }

// hello()








//arrow function


// const hello = (username)=>{
//   return `hello ${username}`
// }

// function hello(username){
//   return `hello ${username}`
// }

// const hello = username => `hello ${username}`


// console.log(hello('abdullah'));









// const iteratedArr = mobiles.map(item => item)
// const iteratedArr = mobiles.filter((item) => {
//   return item.price < 10000
// })
// const iteratedArr = mobiles.filter(item => item.price < 10000)
// console.log(iteratedArr);

















// const arr = ['mango', 'orange', 'banana', 'guawa', 'watermelon', 'melon', 'chikoo'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// const div = document.querySelector('div');

// arr.map(function (item , index , arr){
//   console.log(item)
//   console.log(index)
//   console.log(arr)
//   div.innerHTML += `<h1>${item}</h1>`
// })


// hello()
// function hello(){
//   console.log('hello')
// }



// const obj = {
//   username:'abdullah',
//   func: ()=>{
//     console.log(this.username);
//   }
// }

// obj.func()


































// console.log('hello');
// // console.log('hello2'); // data mangwaya ha
// console.log('hello3');



// console.log('hello 1')
// console.log('hello 2')
// setTimeout(() => {
//   console.log('hello 3')
// }, 0);
// console.log('hello 4')














//settimeout
//setinterval
//promises
//async await
//fetch
//axios














//Promises
// const bankBalance = 100000
// const shaadi = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     if (bankBalance > 200000) {
//       resolve('shaadi mubarak')
//     } else {
//       reject('nahi hoskti')
//     }
//   }, 1000)

// })

// shaadi
// .then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log('reject' , err)
// })

//.then .catch
// async await



// function axios(bankBalance) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bankBalance > 200000) {
//         resolve('shaadi Mubarak');
//       } else {
//         reject('nahi hoskti')
//       }
//     }, 1000)
//   })
// }


// axios(1000000)
// .then((res)=>{
//   return res
// }).then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })

// const hello = async ()=>{}
// async function hello() {
//   try {
//     const isTrue = await axios(2000);
//     console.log(isTrue);
//   } catch (error) {
//     console.log('reject' , error);
//   }
// }

// hello()
































































// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//   return res.json()
// }).then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err);
// })



// axios('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//   console.log(res.data)
// }).catch((err)=>{
//   console.log(err)
// })










// async function getData() {
//   try {
//     const res = await axios('https://jsonplaceholder.typicode.com/users');
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData()








































function hello() {
  console.log('hello world')
}

function hello2() {
  console.log('hello 2');
}
function hello3() {
  console.log('hello 3');
}
function hello4() {
  console.log('hello 4');
}

function mainFunc(){
  console.log('export default');
}

// export {hello , hello2 , hello3 , hello4}

export default mainFunc

























