import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import MenuData from '../src/assets/data/menu-data';
import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <ResponsiveNav
          navLinks={MenuData}
          background="#333"
          hoverBackground="#666"
          linkColor="#fff"
          logo={logo}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
      <Tabs />
      <Footer />
    </>
  );
};

export default App;
