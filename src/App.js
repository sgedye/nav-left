import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import MenuData from '../src/assets/data/menu-data';
import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Consulting from './pages/Consulting';

function App() {

  return (
    <>
      <BrowserRouter>
        <ResponsiveNav
          navLinks={MenuData}
          background="#0078d4"
          hoverBackground="#0000ff"
          linkColor="#fff"
          logo={logo}
        />
        <Tabs />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/research" component={Research} />
          <Route path="/events" component={Events} />
          <Route path="/resources" component={Resources} />
          <Route path="/consulting" component={Consulting} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
