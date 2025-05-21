import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Users from './components/users/Users'
import Footer from './components/footer/Footer'
import Carts from './components/carts/Carts'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Users />
      <Carts />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default React.memo(App)
