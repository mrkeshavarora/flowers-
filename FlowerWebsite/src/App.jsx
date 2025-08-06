import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import { Route,Routes } from 'react-router-dom'
import Hero from './components/pages/hero/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>sjkbk</h1>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  )
}

export default App
