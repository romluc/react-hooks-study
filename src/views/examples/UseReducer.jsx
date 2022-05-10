import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'
import {
  addNumber,
  divNumberBy25,
  login,
  logout,
  numberTimes7,
  numberToInt,
} from '../../store/actions'

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='UseReducer'>
      <PageTitle
        title='UseReducer hook'
        subtitle='Another way to manage state, especially complex ones!'
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
            onClick={() => login(dispatch, 'John Doe')}
            disabled={state.user}
          >
            Login
          </button>
          <button
            className='btn'
            onClick={() => logout(dispatch)}
            disabled={!state.user}
          >
            Logout
          </button>
        </div>
        <span className='text'>{state.number} </span>
        <div className='center'>
          <button className='btn' onClick={() => addNumber(dispatch, 1)}>
            +1
          </button>
          <button className='btn' onClick={() => divNumberBy25(dispatch)}>
            / 25
          </button>
          <button className='btn' onClick={() => numberTimes7(dispatch)}>
            * 7
          </button>
          <button className='btn' onClick={() => numberToInt(dispatch)}>
            to Int
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
