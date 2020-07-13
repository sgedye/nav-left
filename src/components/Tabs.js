import React from 'react';
import MenuData from './../assets/data/menu-data';

const Tabs = () => (
  <div className="tabs">
    <ul>
      {MenuData.map(tab => (
        <li key={tab.id}>
          <a href={tab.path}>
            <i className={tab.icon} />
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Tabs;
