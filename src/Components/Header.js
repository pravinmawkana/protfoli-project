import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1>Web development and website promosions</h1>
        <Typed
          className='typed-text'
          strings={['Web Design', 'Web Development', 'Application Development']}
          typeSpeed={40}
          backSpeed={60}
          backDelay={10}
          loop
        />
        <a className='btn-main-offer' href='#'>
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Header
