import React, { useState } from 'react'

function Counter({title}) {
  const [value, setValue] = useState(0);
  return (
    <div className='container'>
      <h1 className='d-flex justify-content-center align-items-center'>{title}</h1>
      <div className="d-flex justify-content-center align-items-center">
        <button className='mx-2' onClick={() => handleDecrementCount()}>-</button>
          <h3>Value : {value}</h3>
        <button className='mx-2' onClick={() => handleIncrementCount()}>+</button>
      </div>
    </div>
  )

  function handleIncrementCount() {
    setValue(value + 1);
  }

  function handleDecrementCount() {
    setValue(value - 1);
  }
}

export default Counter;
