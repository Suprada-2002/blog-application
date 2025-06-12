import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AddBlog from "./components/AddBlog"
import Navbar from "./components/Navbar"
import Viewblog from './components/ViewBlog'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/addBlog' element={<AddBlog />} />
        <Route path='/view/:id' element={<Viewblog />} />
        <Route path='/editBlog/:id' element={<AddBlog />} />
      </Routes>
      <footer className='z-50 bg-[#F7D0B1] text-[#3D3D3D] shadow-sm p-3 text-center'>
        <p className='font-bold text-lg'>Made With React.js and Springboot</p>
      </footer>
     </BrowserRouter>
    </>
  )
}

export default App;
