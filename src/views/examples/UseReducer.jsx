import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='UseReducer'>
      <PageTitle
        title='UseReducer hook'
        subtitle='Another way to manage state!'
      />
      <SectionTitle title='Exercise #1' />
      <div className='center col'>
        {state.user ? (
          <span className='text green'>{state.user.name} </span>
        ) : (
          <span className='text red'>No user</span>
        )}
        <div className='mb-4'>
          <button
            className='btn'
            onClick={() => dispatch({ type: 'login', payload: 'John' })}
            disabled={state.user}
          >
            Login
          </button>
          <button
            className='btn'
            onClick={() => dispatch({ type: 'logout', payload: null })}
            disabled={!state.user}
          >
            Logout
          </button>
        </div>
        <span className='text'>{state.number} </span>
        <button
          className='btn'
          onClick={() => dispatch({ type: 'addNumber', payload: 1 })}
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default UseReducer
