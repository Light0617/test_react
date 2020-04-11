import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section class='section-tours' id='contact'>
        <div class='u-center-text u-margin-bottom-big'>
          <h2 class='heading-secondary'>
            Contact
          </h2>
        </div>
        <Row>
          <Col>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--1'>
                  &nbsp;
                </div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--1'>
                    Linkedin
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>Computer Science</li>
                    <li>Machine Learning</li>
                    <li>Finance</li>
                    <li>Psychology</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-1'>
                <div class='card__cta'>
                  <a target="_blank"  href='https://www.linkedin.com/in/khl1147/' class='btn btn--white'> Let's Link!</a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--2'>
                  &nbsp;
                </div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--2'>
                    Github
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>Computer Science</li>
                    <li>Machine Learning</li>
                    <li>Finance</li>
                    <li>Psychology</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-2'>
                <div class='card__cta'>
                  <a target="_blank"  href='https://github.com/Light0617/' class='btn btn--white'> Let's Code!</a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--3'>
                  &nbsp;
                </div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--3'>
                    Medium
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>Computer Science</li>
                    <li>Machine Learning</li>
                    <li>Finance</li>
                    <li>Psychology</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-3'>
                <div class='card__cta'>
                  <a target="_blank"  href='https://www.linkedin.com/in/khl1147/' class='btn btn--white'> Let's Write!</a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--3'>
                  &nbsp;
                </div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--3'>
                    Instagram
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>Computer Science</li>
                    <li>Machine Learning</li>
                    <li>Finance</li>
                    <li>Psychology</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-3'>
                <div class='card__cta'>
                  <a target="_blank"  href='https://www.instagram.com/arthurnone6406/' class='btn btn--white'> Let's Ins!</a>
                </div>
              </div>
            </div>
          </Col>

        </Row>

        <div class='u-center-text u-margin-top-huge'>
          <a href='#' class='btn btn--green'>Dicover all tours</a>
        </div>
      </section>
    )
  }

}
export default Contact;