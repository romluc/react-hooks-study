import React from 'react'
import { GiFishingHook } from 'react-icons/gi'
import { FaReact } from 'react-icons/fa'
import PageTitle from '../../components/layout/PageTitle'

const Home = () => (
  <div className='Home'>
    <PageTitle title='React Hooks' subtitle='Starting from React 16.8.' />
    <div className='Home-content'>
      <FaReact size={120} />
      <GiFishingHook size={120} />
    </div>
  </div>
)

export default Home
