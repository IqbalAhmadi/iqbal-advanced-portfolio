import './index.scss'
import Projects from '../Projects.js/pojects'
import About from '../About/index'
import Contact from '../Contact/index'
import Home from '../Home/index'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const PortfolioPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // TODO: rendering pages - not finished yet
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Projects />
      case 'contact':
        return <Contact />
      case 'home':
        return <Home />
    }
  }

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'P',
                'o',
                'r',
                't',
                'f',
                'o',
                'l',
                'i',
                'o',
                ' ',
                '💼',
              ]}
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
