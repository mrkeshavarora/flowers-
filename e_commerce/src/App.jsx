import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './pages/hero/hero.jsx'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './pages/product/productPage.jsx'
import Signup from './pages/signup/signup.jsx'
import About from './pages/about/about.jsx'
import Signin from './pages/signin/signin.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Hero/> }/>
        <Route path={'/productPage/:id'} element={<ProductPage/>}/>
        <Route path={'/signup'} element={<Signup/>}/>
        <Route path={'/signin'} element={<Signin  />}/>

        <Route path={'/about'} element={<About/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
