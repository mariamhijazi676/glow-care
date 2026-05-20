import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const path = window.location.pathname

  if (path === '/about') return <About />
  if (path === '/services') return <Services />
  if (path === '/contact') return <Contact />

  return <Home />
}

export default App