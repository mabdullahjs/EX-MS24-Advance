// import { useState } from "react";



// function App() {
//   const [num, setNum] = useState(1);
//   // let num = 1;

//   function addCounter() {

//     // num += 1
//     setNum(num + 1);
//   }

//   function lessCounter() {
//     if(num > 0){
//       setNum(num - 1);
//     }
//   }
//   return (
//     <>
//       <h1>Hello world! {num}</h1>
//       <button onClick={addCounter}>Add Counter</button>
//       <button onClick={lessCounter}>less Counter</button>
//     </>
//   )
// }

// export default App















import { useState } from "react";
import { useRef } from "react";

function App() {
  //hooks kuch nahi 
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    console.log(userInput.current.value);
    todo.push(userInput.current.value);
    setTodo([...todo])
    console.log(todo);
    userInput.current.value = ''
  }

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    todo.splice(index , 1);
    setTodo([...todo])
  }

  const editTodo = (index)=>{
    const updatedValue = prompt('enter updated value')
  }

  return (
    <>
      <h1>Hello world!</h1>
      <input type="text" placeholder="enter todo" ref={userInput} />
      <button onClick={addTodo}>AddTodo</button>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={()=>editTodo(index)}>Edit</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App







