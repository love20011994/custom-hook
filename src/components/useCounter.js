// import React, { useState } from "react"

// function useCounter(initialValue, val) {
//   const [count, setcount] = useState(initialValue)

//   const increment = (value) => {
//     if (!NaN) {
//       setcount(count + val + value)
//     } else {
//       setcount(count + val)
//     }
//   }

//   const decrement = (value) => {
//     if (!NaN) {
//       setcount(count - val - value)
//     } else {
//       setcount(count - val)
//     }
//   }

//   const reset = () => {
//     setcount(initialValue)
//   }
  // return [count, increment, decrement, reset]
// }

// export default useCounter


import React, { useState } from 'react'

function useCounter() {

  const[count,setcount] = useState(0)
  const incrementCount=()=>{
        setcount(count +1)}

        const decrementCount=()=>{
          setcount(count -1)
        }
        return [count,incrementCount,decrementCount]

  }
  


export default useCounter
