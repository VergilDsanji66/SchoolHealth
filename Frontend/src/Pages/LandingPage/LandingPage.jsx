import React, { useEffect, useState } from 'react'
import "./LandingPage.css"
import { landingPageItems } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
  const [slideShow, setSlideShow] = useState(0);
  const totalSlides = landingPageItems.length;

  const handleNextSlide = () => {
    setSlideShow((prev) => (prev + 1) % totalSlides);
  }

  const handlePrevSlide = () => {
    setSlideShow((prev) => (prev - 1 + totalSlides)% totalSlides);
  }

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='landing-page-container'>
      { landingPageItems.map((items, index) => (
        <div
        key={items.id}
        className="page"
        >
          <div className="info">
            <h1>{items.name}</h1>
            <p>{items.Destriction}</p>
            <button>{items.button}</button>
          </div>
          <div className="button left" onClick={handlePrevSlide}>
            < FontAwesomeIcon icon={faLeftLong}/>
          </div>
          <div className="button right" onClick={handleNextSlide}>
            < FontAwesomeIcon icon={faRightLong} className='icon'/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LandingPage