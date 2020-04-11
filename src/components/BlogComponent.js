import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App" id ="blog">
        <div className="header">
        <h1>Blog</h1>
          <a
            className="App-link"
            href="https://medium.com/@arthurlee_73761/how-to-solve-cannot-found-tensorflow-examples-bac00be8fcbd"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Medium
        </a>
        </div>
      </div>
    )
  }

}
export default Blog;