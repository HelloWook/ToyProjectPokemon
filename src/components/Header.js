import imagelogo from '../assets/logo.png'
import "../styles/Header.css"

function Header() {
  return (
    <header className="Header">
      <img src = {imagelogo} alt='image logo' className='logo'></img>
      
    </header>
  )
}


export default Header