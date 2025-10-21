import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
    const [isMobile, setIsMobile] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobile(prev => !prev)
      }
    



  return (
   <header className='header'>
    <div className='container'>
        <div className='header__wrapper'>
            <a className='header__logo' href="/">
            <img className='header__logo-img'
            src="/logo-black.svg" 
            alt="header logo image" 
            width={102}
            height={23} />
            </a>

            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="#">Home</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="#">About</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="#">Services</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="#">Work</a>
                    </li>
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href="#">Contact</a>
                    </li>
                </ul>
            </nav>

           {/* Mobile */}
          <div className='header__mobile'>
            <button
              className='header__mobile-btn'
              type='button'
              onClick={toggleMobileMenu}
            >
              {isMobile ? <X className='close' /> : <Menu className='menu' />}
            </button>

            <nav className={`header__mobile-nav ${isMobile ? 'active' : ''}`}>
              <ul className="header__mobile-list">
                <li className="header__mobile-item">
                  <a className="header__mobile-link" href="#">Home</a>
                </li>
                <li className="header__mobile-item">
                  <a className="header__mobile-link" href="#">About</a>
                </li>
                <li className="header__mobile-item">
                  <a className="header__mobile-link" href="#">Services</a>
                </li>
                <li className="header__mobile-item">
                  <a className="header__mobile-link" href="#">Work</a>
                </li>
                <li className="header__mobile-item">
                  <a className="header__mobile-link" href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>



        </div>
    </div>
   </header>
  )
}

export default Header