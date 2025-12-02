import { useState, useEffect } from 'react'
import './HeroHeader.scss'

// Import images
import img1 from '../../../super-natural/assets/Supernatural-MINIMALportfolio.png'
import img2 from '../../../super-natural/assets/Supernatural-MINIMAL2portfolio.png'
import img3 from '../../../super-natural/assets/Supernatural-MINIMAL3portfolio.png'
import img4 from '../../../super-natural/assets/Supernatural-MINIMAL4portfolio.png'
import img5 from '../../../super-natural/assets/Supernatural-MINIMAL5portfolio.png'
import img6 from '../../../super-natural/assets/Supernatural-MINIMAL6portfolio.png'
import img7 from '../../../super-natural/assets/Supernatural-MINIMAL7portfolio.png'
import img8 from '../../../super-natural/assets/Supernatural-MINIMAL8portfolio.png'
import img9 from '../../../super-natural/assets/Supernatural-MINIMAL9portfolio.png'
import img10 from '../../../super-natural/assets/Supernatural-MINIMAL10portfolio.png'
import img11 from '../../../super-natural/assets/Supernatural-MINIMAL11portfolio.png'
import { useNavigate } from 'react-router-dom'

export default function HeroHeader() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 1000) // Change every 1 second

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="hero-header">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hero-title-line-1">Made</span>
            <span className="hero-title-line-2">Without Limits</span>
          </h1>
          <button 
            className="hero-button view-work-button"
            onClick={() => navigate('/projects')}
          >
            VIEW WORK
          </button>
        </div>
        <div className="hero-right">
          <div className="hero-subtitle">
            <p>Stealing people's attentionto show them what really matters</p>
          </div>
          <button 
            className="hero-button lets-talk-button"
            onClick={() => navigate('/contact')}
          >
            LET'S TALK →
          </button>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-container">
          <img 
            src={images[currentImageIndex]} 
            alt="Portfolio showcase" 
            className="hero-rotating-image"
          />
        </div>
        <div className="color-block-red">
          <div className="red-block-content">
            <div className="red-block-left">
              <h2 className="red-block-title">Yoo-Hoo!<br /> I'm Kendall</h2>
            </div>
            <div className="red-block-right">
              <p className="red-block-text">
                Design, to me, is about intention. I'm driven by the challenge of creating
                work that feels considered, honest, and genuinely crafted. Every project is
                any opportunity to build something that reflects care and meaning - something
                made with depth, not just decoration.
              </p>
              <button className="red-block-button">ABOUT ME +</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
