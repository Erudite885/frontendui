import React from 'react'
import { Navbar,Hero,About,Footer,CTA,Journey,Mission,Partners,Press,Trusted } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <About />
      <Mission />
      <Journey />
      <Partners/>
      <Press />
      <CTA />
      <Footer />
      
    </div>
  )
}

export default App