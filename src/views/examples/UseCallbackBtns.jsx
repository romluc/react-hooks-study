import React from 'react'

function UseCallbackBtns({ inc, setCount }) {
  console.log('Rendering...')
  return (
    <div className='center'>
      <button className='btn' onClick={() => inc(5)}>
        +5
      </button>
      <button className='btn' onClick={() => inc(10)}>
        +10
      </button>
      <button className='btn' onClick={() => inc(20)}>
        +20
      </button>
      <button className='btn' onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default React.memo(UseCallbackBtns)
