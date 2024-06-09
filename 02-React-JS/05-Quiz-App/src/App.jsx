// import React, { useState } from 'react'
// import Input from './components/Input'

// const App = () => {
//   const [show, setShow] = useState(false);

//   const getDataFromChildren = (value) => {
//     console.log('form value===>', value)
//   }

//   return (
//     <>
//       <h1>Hello world!</h1>
//       <button
//         onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'}</button> <br /><br />
//       {show ? <Input title='Full Name' placeholder='Enter your full name' func = {getDataFromChildren}/> : null}
//     </>
//   )
// }

// export default App



// usestate
// useeffect
//api handeling
// router





















// import React, { useState } from 'react'
// import Input from './components/Input'

// const App = () => {
//   const [show , setShow] = useState(false);

//   const getValueFromChildren = (value) => {
//     console.log('parent ===>', value);
//   }

//   const changeState = ()=>{
//     setShow(!show);
//   }
//   return (
//     <>
//       <h1>Hello world</h1>

//       <button onClick={changeState}>{show ? 'hide' : 'show'}</button> <br /><br />

//       {show ? <Input title="full name" placeholder='enter your full name' func={getValueFromChildren} /> : null}
//     </>
//   )
// }

// export default App

























// import axios from 'axios'
// import React, { useRef, useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//   const [questions, setQuestions] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [totalMarks, setTotalMarks] = useState(0);
//   const [result, setResult] = useState(0);
//   const selectedOptionRef = useRef();

//   // get quiz questions
//   useEffect(() => {
//     axios('https://the-trivia-api.com/v2/questions')
//       .then((res) => {
//         console.log(res.data)
//         setQuestions(res.data);
//         setTotalMarks(res.data.length * 10)
//       }).catch((err) => {
//         console.log(err);
//       })

//   }, [])

//   //shuffle array
//   function shuffleArray(arr) {
//     let newArr = arr.slice();

//     for (let i = newArr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//     }

//     return newArr;
// }


//   // next question
//   const nextQuestion = () => {

//     // get checked values
//     const selectedOption = selectedOptionRef.current.querySelector('input:checked');
//     console.log(selectedOption.value);

//     if(questions[currentIndex].correctAnswer === selectedOption.value){
//       console.log('sahi answer lagaya ha.')
//       setResult(result + 10)
//     }else{
//       console.log('galat answer haa');
//     }


//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log('question khtm');
//     }
//   }
//   return (
//     <>
//       <h1>Quiz App</h1>
//       <h1>Result {result} / {totalMarks}</h1>
//       {questions ?
//         <div>
//           <h1>Q{currentIndex + 1}: {questions[currentIndex].question.text}</h1>
//           <ul ref={selectedOptionRef}>
//             {shuffleArray([...questions[currentIndex].incorrectAnswers , questions[currentIndex].correctAnswer]).map((item , index)=>{
//               return <li key={index}>
//                 <input type="radio" value={item} name='choice'/>
//                 <label htmlFor="">{item}</label>

//               </li>
//             })}
//           </ul>
//           <button onClick={nextQuestion}>Next</button>
//         </div>
//         : <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App










// const arr =shufflearr( [...incorrectitem , correctanswer])
































import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [questions, setQuestions] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(8);
  const [btn, setBtn] = useState(true);

  const checkedInput = useRef()
  // useeffect for api calling
  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((error) => {
        console.log('error ===>', error)
      })
  }, [])

  //change question
  const nextQuestion = () => {
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(prev => prev + 1)
    // setCurrentIndex(prev => prev + 1)
    // setCurrentIndex(prev => prev + 1)
    // setCurrentIndex(prev => prev + 1)
    // console.log(currentIndex);

    const selectedOption = checkedInput.current.querySelector('input:checked');
    console.log(selectedOption.value);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('maalik questions khtm hogaye hain!')
      setBtn(false);
    }
  }

  //shuffle array
  function shuffleArray(arr) {
    let newArr = arr.slice();

    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
  }


  return (
    <>
      <h1>Quiz App!</h1>
      {questions ?
        <div>
          <h1>Q{currentIndex + 1}: {questions[currentIndex].question.text}</h1>
          <ul ref={checkedInput}>
            {shuffleArray([...questions[currentIndex].incorrectAnswers, questions[currentIndex].correctAnswer]).map((item, index) => {
              return <li key={index}>
                <input type="radio" name='choice' id={item} value={item}/>
                <label htmlFor={item}>{item}</label>
              </li>
            })}
          </ul>
          {btn ? <button onClick={nextQuestion}>Next</button> : null}
        </div>
        : <h1>Loading...</h1>}
    </>
  )
}

export default App





































