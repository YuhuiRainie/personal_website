import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <h2 className='text-white'>Thanks for visiting my website : )</h2>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Rainie
              <i className='fas fa-laptop-code' />
            </Link>
          </div>
          <small className='website-rights'>Rainie Liu © 2020</small>
          <div className='social-icons'>
            <a
              className='social-icon-link Github'
              to='/'
              href='https://github.com/YuhuiRainie'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link Linkedin'
              to='/'
              href='https://www.linkedin.com/in/yuhui-liu/'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
