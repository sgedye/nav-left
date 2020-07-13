import React from 'react';

const tabData = [
  { id: 0, title: 'Home', path: '/', icon: 'ion-ios-home' },
  { id: 1, title: 'About', path: '/about', icon: 'ion-ios-business' },
  { id: 2, title: 'Blog', path: '/blog', icon: 'ion-ios-bonfire' },
  { id: 3, title: 'Contact', path: '/contact', icon: 'ion-ios-megaphone' }
];

const Tabs = () => {
  return (
    <div className="tabs">
      <ul>
        {tabData.map(tab => {
          console.log(tab.icon)
          return (
          <li key={tab.id}>
            <a href={tab.path}>
              <i className={tab.icon} />
              {tab.title}
            </a>
          </li>
        )})}
      </ul>
    </div>
  );
};

export default Tabs;
