import React, { useContext } from 'react'
import DataContext from '../../components/layout/data/DataContext'
import { AppContext } from '../../components/layout/data/Store'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseContext = () => {
  const { state, setState } = useContext(DataContext)

  const inc = (delta) =>
    setState((prev) => ({ ...prev, number: prev.number + delta }))
  const dec = (delta) =>
    setState((prev) => ({ ...prev, number: prev.number - delta }))

  const { number, setNumber, text, setText } = useContext(AppContext)

  return (
    <div className='UseContext'>
      <PageTitle
        title='useContext hook'
        subtitle='Receives a context object and return its current value!'
      />
      <SectionTitle title='Exercise #1 - Context API' />

      <div className='center col'>
        <span className='text red'>{state.title}</span>
        <h1 className='text green'>{state.subtitle}</h1>
        <span className='text mb-4'>{state.number}</span>
        <div className='center mb-4'>
          <button className='btn' onClick={() => inc(5)}>
            +5
          </button>
          <button className='btn' onClick={() => dec(5)}>
            -5
          </button>
        </div>
      </div>
      <SectionTitle title='Exercise #2 - Context API + Hooks' />
      <div className='center col'>
        <span className='text red'>{number}</span>
        <span className='text mb-4'>{text}</span>
        <div className='center'>
          <button className='btn' onClick={() => setNumber(number + 1)}>
            +1
          </button>
          <button className='btn' onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className='btn' onClick={() => setText('New text')}>
            Change text using context
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseContext
