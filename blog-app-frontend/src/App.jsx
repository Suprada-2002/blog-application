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
     </BrowserRouter>
    </>
  )
}

export default App;
