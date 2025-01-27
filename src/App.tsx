import {BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './router/Router'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function App() {
 
  return (
  
    
    <Router basename='/'>
      <div className="page sm">
        <Header />  
          <AppRoutes /> 
        <Footer />
      </div>
    </Router>
    
    
  )
}