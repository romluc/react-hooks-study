import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b) {
  const future = Date.now() + 1000
  while (Date.now() < future) {
    // Mimic expensive calculation
    // Do nothing
  }
  return a + b
}

const UseMemo = () => {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [n3, setN3] = useState(0)

  // const [result, setResult] = useState(0)

  const result = useMemo(() => {
    // skip the first render
    if (n1 === 0 && n2 === 0) return
    sum(n1, n2)
  }, [n1, n2])

  // Mimicking useMemo with useState + useEffect
  // useEffect(() => {
  //   // skip the first render
  //   if (n1 === 0 && n2 === 0) return
  //   setResult(sum(n1, n2))
  // }, [n1, n2])

  return (
    <div className='UseMemo'>
      <PageTitle title='useMemo hook' subtitle='Return a memoized value!' />
      <input
        type='number'
        className='input narrow'
        value={n1}
        onChange={(e) => setN1(Number(e.target.value))}
      />
      <input
        type='number'
        className='input narrow'
        value={n2}
        onChange={(e) => setN2(Number(e.target.value))}
      />
      <input
        type='number'
        className='input narrow'
        value={n3}
        onChange={(e) => setN3(Number(e.target.value))}
      />
      <span className='text'>{result}</span>
    </div>
  )
}

export default UseMemo
