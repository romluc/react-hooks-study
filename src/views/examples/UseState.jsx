import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div className='UseState'>
      <PageTitle
        title='useState hook'
        subtitle='Stateful function-based components!'
      />
      <SectionTitle title='Exercise #1' />
      <div className='center'>
        <span className='text'>{count}</span>
      </div>
      <div className='center mb-4'>
        <button
          className='btn'
          onClick={() => setCount((previousCount) => previousCount - 1)}
        >
          -1
        </button>
        <button className='btn' onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          className='btn'
          onClick={() => setCount((previousCount) => previousCount + 1)}
        >
          +1
        </button>
      </div>
      <SectionTitle title='Exercise #2 - Controlled component' />
      <div className='center'>
        <span className='text'>{count}</span>
      </div>
      <div className='center mb-4'>
        <input
          type='text'
          className='input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your text...'
        />
      </div>
    </div>
  )
}

export default UseState
