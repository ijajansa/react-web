import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
const Layout = ({children}) => {
  return (
    <div>
    <div className="container-scroller">
      <Header/>
      <div className="container-fluid page-body-wrapper">
        <Sidebar/>
        <div className="main-panel">
          {children}
          <Footer/>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default Layout
