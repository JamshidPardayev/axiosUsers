import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Users from './components/users/Users'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Users />
      <Footer />
    </div>
  )
}

export default React.memo(App)
