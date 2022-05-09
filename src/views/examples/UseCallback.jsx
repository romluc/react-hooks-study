import React, { useState, useCallback } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import UseCallbackBtns from './UseCallbackBtns'

const UseCallback = () => {
  const [count, setCount] = useState(0)

  const inc = useCallback(
    (delta) => setCount((curr) => curr + delta),
    [setCount]
  )

  return (
    <div className='UseCallback'>
      <PageTitle
        title='useCallback hook'
        subtitle='Return a memoized function!'
      />
      <div className='center'>
        <span className='text'>{count}</span>
      </div>
      <UseCallbackBtns inc={inc} setCount={setCount} />
    </div>
  )
}

export default UseCallback
