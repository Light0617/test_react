import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './HeaderComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
import Contact from './ContactComponent';


class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Blog />
        <Contact/>
      </div>
    );
  }
}
export default Main;
