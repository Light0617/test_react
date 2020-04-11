import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about-style" id ="book">
        {/* <div className="context-background"> */}
        <div className="header">
        <h1>books</h1>
          <a
            className="App-link"
            href="https://medium.com/@arthurlee_73761/how-to-solve-cannot-found-tensorflow-examples-bac00be8fcbd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </div>
      </div>
    )
  }

}
export default Book;