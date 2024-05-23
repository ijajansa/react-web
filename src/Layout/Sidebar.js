import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <ul className="nav">
    <li className="nav-item nav-profile">
      <a href="#" className="nav-link">
        <div className="nav-profile-image">
          <img src="../assets/images/faces/face1.jpg" alt="profile" />
          <span className="login-status online"></span>
        </div>
        <div className="nav-profile-text d-flex flex-column">
          <span className="font-weight-bold mb-2">David Grey. H</span>
          <span className="text-secondary text-small">Project Manager</span>
        </div>
        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
      </a>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        <span className="menu-title">Dashboard</span>
        <i className="mdi mdi-home menu-icon"></i>
      </Link>
    </li>
   
    <li className="nav-item">
      <Link className="nav-link" to="category">
        <span className="menu-title">Category</span>
        <i className="mdi mdi-home menu-icon"></i>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="products">
        <span className="menu-title">Products</span>
        <i className="mdi mdi-home menu-icon"></i>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="addproduct">
        <span className="menu-title">AddProduct</span>
        <i className="mdi mdi-home menu-icon"></i>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="addcategory">
        <span className="menu-title">AddCategory</span>
        <i className="mdi mdi-home menu-icon"></i>
      </Link>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Sidebar
