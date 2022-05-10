import './List.css'
import React from 'react'

export default function List({ title, children }) {
  return (
    <>
      <span className='title'> {title} </span>
      <ul className='List'>{children}</ul>
    </>
  )
}
