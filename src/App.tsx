import { FC } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

const App: FC = () => {
  return (
    <div className='container'>
      <Header heading='Jonas' />
      <Hero />
    </div>
  )
}

export default App
