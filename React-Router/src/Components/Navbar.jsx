import {Link} from 'react-router-dom'

const Navbar=() => {
  return (
    <div>
      <nav>
        <li><Link to="/home">Kalvium ❤️</Link></li>

      <ul>
        <li><Link to="/contact">Contact</Link></li>
        
        <li><Link to="/about">About</Link></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
