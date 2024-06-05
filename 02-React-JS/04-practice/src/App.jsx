import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Card";

function App() {
  const [data , setData] = useState([]);
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.log(res.data)
      setData(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  } , [])
  return (
    <>
    <h1>Users</h1>
    <div>
      {data.length > 0 ? data.map((item)=>{
        return <Card key={item.id} title={item.name} description={item.phone} color="lightblue"/>
      }): <h1>Loading...</h1>}
    </div>
    </>
  )
}

export default App























// import { useEffect, useState } from "react"
// import Card from "./components/Card"

// function App() {
//   const [count1, setcount1] = useState(0);
//   const [count2, setcount2] = useState(0);
//   useEffect(()=>{
//     console.log('component mounted');
//   } , [count1])
//   return (
//     <>
//       <h1>Hello world!</h1>
//       {/* <Card title= "hello" description= "lorem ipsum 123" color="purple" textColor="lightblue"/>
//       <Card title= "hello 2" description= "lorem ipsum 987" color="orange" textColor="white"/> */}
//       <h1>Count one {count1}</h1>
//       <h1>Count two {count2}</h1>
//       <button onClick={()=> setcount1(count1 + 1)}>add count one</button>
//       <button onClick={()=> setcount2(count2 + 1)}>add count two</button>
//     </>
//   )
// }

// export default App




























// import { useState } from "react"

// function App(){
//   const [counter , setCounter] = useState(['1']);

//   function addCounter (){
//     // counter.push('abc');
//     // setCounter([...counter])
//     // setCounter([...counter , 'abc'])
//     console.log(counter)
//   }

//   return (
//     <>
//     <h1>Hello world!</h1>
//     <button onClick={addCounter}>add</button>
//     <div>
//       {counter.length > 0 ? counter.map((item , index)=>{
//         return <h3 key={index}>{item}</h3>
//       }) : <h1>No item found!</h1>}
//     </div>
//     </>
//   )
// }

// export default App


