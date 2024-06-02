// import { useEffect, useState } from "react"
// import Navbar from "./components/Navbar"

// function App() {
//   const [count, setCount] = useState(0)
//   const [countwo, setCountwo] = useState(0)

//   // aik to empty array ya sirf component mount hona pa chalaiga

//   // second argument ma agar kuch nahi donga to har state change pa useeffect chalaiga

//   //array ka undar jis state ka name donga usi state change pa useffect chalaiga

//   useEffect(() => {
//     console.log('hello use effect')
//   } , [])

//   return (
//     <>
//       <Navbar />
//       <h1 className="text-center text-5xl">counter one  {count}</h1>
//       <h1 className="text-center text-5xl">counter two {countwo}</h1>
//       <div className="text-center">
//         <button className="btn btn-primary mt-5" onClick={() => setCount(count + 1)}>addCount1</button>
//         <button className="btn btn-primary mt-5" onClick={() => setCountwo(countwo + 1)}>addCount2</button>
//       </div>
//     </>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <Navbar />
      <h1>Hello world</h1>
      <div className='flex justify-center gap-5 flex-wrap mt-[3rem]'>
      {products ? 
      products.map((item)=>{
        return <Card key={item.id} title={item.title} description={item.description} img={item.thumbnail} price={item.price} />
      })
      : <h1><span className="loading loading-spinner loading-sm"></span></h1>}
      </div>
      
    </>
  )
}

export default App



// <h1 style={{
//   color: 'white',
//   backgroundColor: 'red',
//   textAlign: 'center'
// }}>Hello world! {num}</h1>