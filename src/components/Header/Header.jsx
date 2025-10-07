import './Header.css'

function Header() {
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
        </div>
    </div>
   </header>
  )
}

export default Header