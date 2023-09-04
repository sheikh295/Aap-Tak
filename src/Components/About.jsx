import React from 'react'
import Navbar from './Header/Navbar'

function About() {
  return (
    <>
        <Navbar activeClassAbout="active" />
        <div className='card' style={{width: '1000px', margin: 'auto', marginTop: '80px'}}>
          <div className='card-body'>
            <h2>Aap Tak - The Ultimate News App</h2>
            <p style={{marginTop: '30px'}}>This is a news app made with React + VIte using newsdata.io API key which is a REST API. You can get news by different categories. There are 3 pages for each of news category. You can also select the country you want news of, such as Pakistan, India, USA, UK.</p>
            <p>This project is made by Mamoor Ali and published at aap-tak.sheikhstudio.tech.</p>
            <p>Visit Github for more information of projects at github.com/sheikh295</p>
          </div>
        </div>
    </>
  )
}

export default About