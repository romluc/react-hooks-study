import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(100)

  function inc() {
    setCount(count + 1)
  }

  function dec() {
    setCount(count - 1)
  }

  return [count, inc, dec]
}
