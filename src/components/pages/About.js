import React from 'react'
import './About.css'
// import CardItem from '../CardItem'
// import '../Card.css'
// import Button from 'react-bootstrap/Button'
// import { Container, Row, Col, Image } from 'react-bootstrap'
function About () {
  const socialLinkConnect = () => { window.open('https://www.linkedin.com/in/yuhui-liu/')}
  return (
    <div className='about_container'>
      <div className='container'>
        <div className='p-4 mb-0 bg-white text-dark'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='about-img'>
                {/* <img className='shape' src='projects/bubblePop.png' alt='' /> */}
                <img className='my_picture' src='/my_photo/my_pic1.jpg' alt='' />
              </div>
            </div>
            <br />
            <div className='col-md-7 about-right'>
              <h1 className='color-3'><b>About Me</b>
              </h1>
              <p className='text-dark'>
              A dedicated graduate from the University of Technology Sydney with a Master’s degree in Software Engineering.
              </p>
              <p className='text-dark'>
              Seeking a role in Frontend that would utilize my coding skills to help solve real-world challenges and build great software solutions.
              </p>
              <p>
              I am passionate about tech-related knowledge, like web, application, neural network and deep learning. I am keen to learn more. I'm a fast learner as well
              </p>
              <h3 className='color-3 social-link-text'>
                <button className='btn btn-danger' onClick={socialLinkConnect}>Connect with me</button>
              </h3>
              <ul className='about-link'>
                <li>
                  <a
                    className='social-icon-link Github'
                    to='/'
                    href='https://github.com/YuhuiRainie'
                    aria-label='Github'
                  >
                    <i className='fab fa-github' />
                  </a>
                </li>
                <li>
                  <a
                    className='social-icon-link Linkedin'
                    to='/'
                    href='https://www.linkedin.com/in/yuhui-liu/'
                    aria-label='LinkedIn'
                  >
                    <i className='fab fa-linkedin' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
