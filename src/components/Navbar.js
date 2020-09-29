import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import cv from '../Rainie_CV.pdf'

function Navbar () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showCV = () => {
    window.open(cv)
  }
  const downloadCVForSmallNav = () =>{
    showCV();
    closeMobileMenu();
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Rainie
            <i className='fas fa-laptop-code' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={downloadCVForSmallNav}
              >
                Download CV
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={showCV}>Download CV</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
