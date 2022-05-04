import './PageTitle.css'
import React from 'react'

const PageTitle = ({ error, title, subtitle }) => (
  <div className={`PageTitle ${error ? 'error' : ''}`}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
)

export default PageTitle
