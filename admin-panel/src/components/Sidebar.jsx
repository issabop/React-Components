import React from 'react';
import SidebarItem from './SidebarItem';

function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit</span>
        </a>
        <ul className="sidebar-nav">
          <SidebarItem title="Dashboard" icon="sliders" active />
          <SidebarItem title="Profile" icon="user" />
          <SidebarItem title="Sign In" icon="log-in" />
          <SidebarItem title="Sign Up" icon="user-plus" />
          <SidebarItem title="Blank" icon="book" />
          <SidebarItem title="Buttons" icon="square" />
          <SidebarItem title="Forms" icon="check-square" />
          <SidebarItem title="Cards" icon="grid" />
          <SidebarItem title="Typography" icon="align-left" />
          <SidebarItem title="Icons" icon="coffee" />
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
