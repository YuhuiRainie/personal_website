import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, Image } from 'react-bootstrap'
function About () {
  return (
    <div id='about' className='about_me'>
      <Container>
        <Row>
          <Col xs={3}>
            <Image src='/projects/bubblePop.png' roundedCircle />
          </Col>
          <Col xs={9}>
            <h1 className='header'>About</h1>
            <p>Experienced Tutor with a demonstrated history of working in the higher education industry. Skilled in Python (Programming Language), English, Java, SQL, and Microsoft Office. Strong education professional with a Master of Computer Science focused in Machine Learning from The Australian National University. </p>
            <Button href='https://github.com/sharkdeng'>Github</Button>
            <Button href='https://www.linkedin.com/in/shark-deng-6639b2181/'>Linkedin</Button>
            <Button href='https://www.kaggle.com/muerbingsha'>Kaggle</Button>
            <a href='https://stackoverflow.com/users/9355534/shark-deng'>
              <img
                src='https://stackoverflow.com/users/flair/9355534.png'
                width='120'
                height='35'
                alt='profile for Shark Deng at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
                title='profile for Shark Deng at Stack Overflow, Q&amp;A for professional and enthusiast programmers'
              />
            </a>
            <Button href='https://www.facebook.com/limin.deng.2019'>Facebook</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
