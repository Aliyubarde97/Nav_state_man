import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout> <Home/> </Layout>} />
        <Route path='/about' element = {<Layout> <About/> </Layout>} />
        <Route path='*' element = {<Navigate to={'/'}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
