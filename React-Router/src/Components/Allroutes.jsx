import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import {Route, Routes} from 'react-router-dom'

const Allroutes=() => {
  return (
    <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}

export default Allroutes
