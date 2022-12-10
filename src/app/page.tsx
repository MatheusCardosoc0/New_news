import React from 'react'
import NewList from '../components/NewList'
import { Category } from '../constants/Category'
import { fetchNews } from '../lib/fetchNews'

const Homepage= async () => {

  const news: NewResponse = await fetchNews(Category.join(','))

  return (
    <main className=''>
      <NewList />
    </main>
  )
}

export default Homepage