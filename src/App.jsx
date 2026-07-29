import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'
import Service from './components/pages/Service'
import Blog from './components/pages/Blog'
import AboutUs from './components/pages/AboutUs'

function App() {


  return (
  <>
  
   <Routes>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>

    </Route>
   </Routes>

  </>
  )
}

export default App
