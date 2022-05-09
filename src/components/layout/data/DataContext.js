import React from 'react'

export const data = {
  title: 'Data',
  subtitle: 'From context API',
  number: 123,
}

const DataContext = React.createContext(null)

export default DataContext
