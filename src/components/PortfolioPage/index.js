import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const PortfolioPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <p>
            Thank you for visiting my portfolio page. Here you can find my
            completed projects.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default PortfolioPage
