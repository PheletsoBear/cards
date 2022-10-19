import React from 'react'
import hero from '../components/images/hero.png'
function Hero() {
  return (
    <section className='hero'>
      <img src={hero} alt='hero' className='hero--logo' />
       <h1 className='hero--header'>Online Experiences</h1>
       <p className='hero--text'>Join uniquew interactive activities led by
          one-of-a-kind hosts
       </p>
    </section>
  )
}

export default Hero
