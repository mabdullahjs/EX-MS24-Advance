import { useRef, useState } from "react";

function App() {

  //hooks === normal js ka functions hain jo react na banai hua hain or export kra hua hain bus..

  // let [count, setCount] = useState(0);


  // function addCounter() {
  //   setCount(count + 1);
  // }

  // function lessCounter() {
  //   if(count > 0){
  //     setCount(count - 1)
  //   }
  // }

  // let [todo, setTodo] = useState(['a' , 'b' , 'c']);
  let todo = ['a' , 'b' , 'c'];

  let username = 'abdullah';
  let user = {
    username: 'abdullah',
    email : 'mabdullah2037@gmail.com',
    age: 20
  }

  let userInput = useRef();

  const addTodo = (event)=>{
    event.preventDefault()

    console.log('todo added' , userInput.current.value)
    userInput.current.value = ''
  }

  return (
    <>
      {/* <h1>Hello world {count}</h1>
      <button onClick={addCounter}>count +</button>
      <button onClick={lessCounter}>count -</button> */}

      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter todo" ref={userInput} />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todo.map((item , index)=>{
          return <li key={index}>{item}
          </li>
        })}
      </ul>

      <h1>{username}</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.age}</li>
      </ul>
    </>
  )
}

export default App