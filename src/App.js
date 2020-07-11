import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg'

import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const navLinks = [
    { id: 0, title: 'Home', path: '/', icon: 'ion-ios-home' },
    { id: 1, title: 'About', path: '/about', icon: 'ion-ios-business' },
    { id: 2, title: 'Blog', path: '/blog', icon: 'ion-ios-bonfire' },
    { id: 3, title: 'Contact', path: '/contact', icon: 'ion-ios-megaphone' }
  ];

  return (
    <BrowserRouter>
      <ResponsiveNav
        navLinks={navLinks}
        background="#333"
        hoverBackground="#666"
        linkColor="#fff"
        logo={logo}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" render={() => <About />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
