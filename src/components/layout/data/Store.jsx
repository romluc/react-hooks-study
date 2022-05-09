import React from 'react'

const initialState = {
  number: 1234,
  text: 'Context API + Hooks',
}

export const AppContext = React.createContext(initialState)

export default function Store({ children }) {
  const [state, setState] = React.useState(initialState)

  function updateState(key, value) {
    setState((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (n) => updateState('number', n),
        setText: (t) => updateState('text', t),
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
