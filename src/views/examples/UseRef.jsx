import React, { useEffect, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (value1, value2) => {
  return [...value1]
    .map((char, index) => `${char}${value2[index] ?? ''}`)
    .join('')
}

const UseRef = () => {
  const [value1, setValue1] = React.useState('')
  const [value2, setValue2] = React.useState('')

  const count = useRef(0)
  const input1 = useRef(null)
  const input2 = useRef(null)

  useEffect(() => {
    count.current++
    input2.current.focus()
  }, [value1])

  useEffect(() => {
    count.current++
    input1.current.focus()
  }, [value2])

  return (
    <div className='UseRef'>
      <PageTitle
        title='useRef hook'
        subtitle='Return a mutable object with the .current property!'
      />
      <SectionTitle title='Exercise #1' />
      <div className='center'>
        <div>
          <span className='text'>Times rendered: </span>
          <span className='text'>[</span>
          <span className='text green'>{count.current}</span>
          <span className='text'>]</span>
          <input
            type='text'
            ref={input1}
            className='input center'
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
        </div>
      </div>
      <SectionTitle title='Exercise #2' />
      <div className='center'>
        <div>
          <input
            type='text'
            ref={input2}
            className='input center'
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
          <span className='text'>Merged values:</span>
          <span className='text green'> {merge(value1, value2)}</span>
        </div>
      </div>
    </div>
  )
}

export default UseRef
