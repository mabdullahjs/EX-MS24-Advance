// import React, { useRef } from 'react'

// const Input = ({title , placeholder , func}) => {

//     const name = useRef()
//     const showValue = ()=>{
//         console.log(name.current.value)
//         func(name.current.value)
//     }
//   return (
//     <>
//     <label htmlFor="input">{title}</label>
//     <input type="text" id='input' placeholder={placeholder} ref={name} /> <br /><br />
//     <button onClick={showValue}>Login</button>
//     </>
//   )
// }

// export default Input

















import React, { useEffect, useRef } from 'react'

const Input = ({title , placeholder , func}) => {
    useEffect(()=>{
        console.log('component mounted')

        return ()=>{
            console.log('component unmount');
        }
    } , [])


    const fullname = useRef()
    const showVal = ()=>{
        console.log(fullname.current.value);
        func(fullname.current.value)
    }
  return (
    <>
    <label htmlFor="input">{title}</label><br />
    <input type="text" id='input' placeholder={placeholder} ref={fullname} /><br />
    <button onClick={showVal}>getValue</button>
    </>
  )
}

export default Input













