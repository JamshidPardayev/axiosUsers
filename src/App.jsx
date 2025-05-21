import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Users from './components/users/Users'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'
import Products from './components/products/Products'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Users />
      <Products />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default React.memo(App)
