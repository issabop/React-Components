import React from 'react';

function SidebarItem({ title, icon, active }) {
  return (
    <li className={`sidebar-item ${active ? 'active' : ''}`}>
      <a className="sidebar-link" href="#">
        <i className={`align-middle`} data-feather={icon}></i>
        <span className="align-middle">{title}</span>
      </a>
    </li>
  );
}

export default SidebarItem;
