import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      {/* Hamburger Icon for Sidebar Toggle */}
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>

      {/* Remove the right-side content */}
      <div className="navbar-collapse collapse">
        {/* No items on the right side */}
      </div>
    </nav>
  );
}

export default Navbar;