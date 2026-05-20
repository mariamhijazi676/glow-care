import React from 'react'
import skinImage from '../assets/images/skin.jpeg'

const Home = () => {
  return (
    <>
    <header>
        <h1>Glow & Care</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
             <a href="/services">Services</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
    <section className="hero">
        <h2>Glow Naturally, Feel Beautiful</h2>
        <p>Discover simple beauty and self-care routines.</p>
        <img src={skinImage} alt="Beauty" className="hero-image" />
        <button>Explore More</button>
      </section>
    </>
  )
}

export default Home