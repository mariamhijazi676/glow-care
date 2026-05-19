import React from 'react'
import skinImage from '../assets/images/skin.jpeg'

const Home = () => {
  return (
    <>
    <header>
        <h1>Glow & Care</h1>
        <nav>
            <a href="/">Home</a>
            <a href="#about">About</a>
             <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <section className="hero">
        <h2>Glow Naturally, Feel Beautiful</h2>
        <p>Discover simple beauty and self-care routines.</p>
        <img src={skinImage} alt="Beauty" className="hero-image" />
        <button>Explore More</button>

    </section>
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>Glow & Care helps you learn simple beauty and sef-care routines.</p>
    </section>
    <section id="services" className="services">
  <h2>Our Services</h2>

  <div className="cards">

    <div className="card">
      <h3>Skin Care</h3>
      <p>Simple routines for healthy glowing skin.</p>
    </div>

    <div className="card">
      <h3>Hair Care</h3>
      <p>Easy tips to keep your hair soft and healthy.</p>
    </div>

    <div className="card">
      <h3>Self Care</h3>
      <p>Relaxing habits for a balanced lifestyle.</p>
    </div>

  </div>
</section>
<section id="contact" className="contact">
  <h2>Contact Us</h2>

  <p>Email: glowcare@gmail.com</p>
  <p>Phone: +961 70 123 456</p>

  <button>Send Message</button>
</section>
    </>
  )
}

export default Home