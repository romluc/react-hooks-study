import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(number) {
  if (number === 0) return 1
  if (number < 0) {
    return 'Invalid number'
  }
  return number * calcFactorial(number - 1)
}

const UseEffect = () => {
  const [number, setNumber] = useState(0)
  const [factorial, setFactorial] = useState(1)

  useEffect(() => {
    // Coercion to number is necessary to avoid NaN when coming from negative values
    setFactorial(calcFactorial(Number(number)))
  }, [number])

  // Ex #2
  const [status, setStatus] = useState('Odd')

  useEffect(() => {
    if (number % 2 === 0) {
      setStatus('Even')
    } else {
      setStatus('Odd')
    }
  }, [number])

  return (
    <div className='UseEffect'>
      <PageTitle
        title='useEffect hook'
        subtitle='Execute collateral effects in functional components!'
      />
      <SectionTitle title='Exercise #1' />
      <div className='center col'>
        <span className='text'>Factorial: </span>
        <span className={`text + ${factorial >= 0 ? 'green' : 'red'}`}>
          {factorial}
        </span>
        <input
          type='number'
          className='input narrow'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title='Exercise #2' />
      <div className='center col'>
        <span className='text'>Status</span>
        <span className='text green'>{status}</span>
      </div>
    </div>
  )
}

export default UseEffect
