import React from 'react'
import Bprojects from './Bprojects'



const landingPage = () => {
  return (
    <div className ='heading-Info' >
    <h1>Hey, I’m Matt Strawbridge</h1>

    <p>I’m a <em className= 'red'>Full Stack Web-Devloper</em> and  love working on things that make peoples lifes easier and better.</p>

    <h2 className='margin-top' >My Code and Info.</h2>
    <div className='links-Info'>
    <div className='Links'>
    <ul>
      <li className='li' >
      <a href="strawbridgeml@gmail.com">Github</a>
      </li>
    </ul>
    </div>
    <div className ='Links'>
    <ul>
      <li className='li' >
      <a href="strawbridgeml@gmail.com">LinkedIn</a>
      </li>
    </ul>
    </div>
    <div className ='Links'>
    <ul>
      <li className='li' >
      <a href="strawbridgeml@gmail.com">CV</a>
      </li>
    </ul>
    </div>

    {Bprojects}
    </div>
    </div>



  )
}

export default landingPage
