import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const navLinks = [
    { title: 'Home', path: '/', icon: 'ion-ios-home' },
    { title: 'About', path: '/about', icon: 'ion-ios-business' },
    { title: 'Blog', path: '/blog', icon: 'ion-ios-bonfire' },
    { title: 'Contact', path: '/contact', icon: 'ion-ios-megaphone' }
  ];
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {navLinks.map(item => (
            <li key={item.title}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>


    </BrowserRouter>
  );
}

export default App;
