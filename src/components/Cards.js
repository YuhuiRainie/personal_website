import React from 'react'
import './Card.css'
import CardItem from './CardItem'

function Cards () {
  return (
    <div className='cards'>
      <h1>CHECK OUT MY PROJECTS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/projects/renting_car_website.png'
              text='It is a car renting website! Click to see it!'
              label='WEB'
              path='/projects'
            />
            <CardItem
              src='/projects/Online_picture_discussion_community.png'
              text='MEAN stack website developed by Angular and Nodejs'
              label='Angular'
              path='/projects'
            />
            <CardItem
              src='/projects/personal_website.png'
              text='Personal website developed by React'
              label='React'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/projects/car_for_renting_ios.png'
              text='It is a iOS app for renting cars'
              label='iOS + alarmfy'
              path='/projects'
            />
            <CardItem
              src='/projects/bubblePop.png'
              text='It is a website to predict the plant disease based on picture'
              label='iOS'
              path='/projects'
            />
            <CardItem
              src='/projects/plant_disease_prediction.png'
              text='It is a website to predict the plant disease based on picture'
              label='Python + Flask + Pytorch + ResNet152'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
