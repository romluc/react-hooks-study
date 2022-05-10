import React from 'react'
import { useCounter } from '../../components/layout/hooks/useCounter'
import useFetch from '../../components/layout/hooks/useFetch'
import List from '../../components/layout/List'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseCustom = () => {
  const [count, inc, dec] = useCounter()

  const url = 'https://canada-holidays.ca/api/v1/provinces'
  const [data, loading] = useFetch(url)

  function showProvinces({ provinces }) {
    return provinces.map(({ id, nameEn }) => (
      <li key={id}>{`${id} - ${nameEn}`}</li>
    ))
  }

  return (
    <div className='UseCounter'>
      <PageTitle title='Custom Hook' subtitle='Custom hook example!' />
      <SectionTitle title='Exercise #1 - useCounter()' />
      <div className='center'>
        <span className='text'>{count}</span>
      </div>
      <div className='center mb-4'>
        <button className='btn' onClick={inc}>
          +1
        </button>
        <button className='btn' onClick={dec}>
          -1
        </button>
      </div>
      <SectionTitle title='Exercise #2 - useFetch()' />
      <div className='center'>
        <span className='text'>
          {loading ? (
            'Loading...'
          ) : (
            <List title='Provinces and territories of Canada'>
              {showProvinces(data)}
            </List>
          )}
        </span>
      </div>
    </div>
  )
}

export default UseCustom
