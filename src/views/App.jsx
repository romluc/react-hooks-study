import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../components/layout/data/DataContext'
import Store from '../components/layout/data/Store'

const App = () => {
  const [state, setState] = useState(data)
  return (
    <Store>
      <DataContext.Provider value={{ state, setState }}>
        <div className='App'>
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  )
}

export default App
