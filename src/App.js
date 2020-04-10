import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/HeaderComponent';
import About from './components/AboutComponent';
import Project from './components/ProjectComponent';
import Blog from './components/BlogComponent';
import Book from './components/BookComponent';
import Paper from './components/PaperComponent';
import Contact from './components/ContactComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Project />
        <Blog />
        <Book />
        <Paper/>
        <Contact/>
      </div>
    );
  }
}
export default App;
