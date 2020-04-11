import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App" id ="project">
        <div className="header">
          <h1>Project</h1>
          <a
            className="App-link"
            href="https://github.com/Light0617/VAE_GAN_Chinese_word_art"
            target="_blank"
            rel="noopener noreferrer"
          >
            My VAE GAN project
        </a>
        </div>
      </div>
    )
  }

}
export default Project;