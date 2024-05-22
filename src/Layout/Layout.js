import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'
const Layout = (children) => {
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
