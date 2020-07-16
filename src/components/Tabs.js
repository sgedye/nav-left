import React from 'react';
import MenuData from './../assets/data/menu-data';
import { Link } from "react-router-dom"

const Tabs = () => (
  <div className="tabs">
    <ul>
      {MenuData.map(tab => (
        <li key={tab.id}>
          <Link to={tab.path}>
            <i className={tab.icon} />
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tabs;
