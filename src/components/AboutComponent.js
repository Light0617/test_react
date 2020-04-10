import React, { Component } from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="about" className="about-style">
        <Container>
          <Row>
            <Col>
              <h1>More About Me</h1>
              <span>Living in San Francisco, a machine learning engineer dedicated in modeling and date engineering</span><br></br>
              <span>During free time, I enjoy coffee, art, TV series and explore delivious food</span><p></p><p></p>
            </Col>
          </Row>
          <Row>
            <Col className="font-left">
              <span>As a good machine learning engineer,</span><br></br>
              <span>not only modeling skills and the solid mathematics background, </span><br></br>
              <span>but also implementation skills and system design ability are crucial.</span><br></br>
              <span>I own financial engineering and computer science double masters and </span>
              <span>keep sharpening coding, reading modeling papers.</span><p></p>

              <span>In a daily machine learning engineer in Yelp,</span><br></br>
              <span>besides hard skills, we also have to write down documentation and dicuss ideas with teamamtes and persuade people to develop the project.</span><br></br>
              <span></span><br></br>
              </Col>
            <Col className="font-left">
              <span>Living in San Francisco</span><br></br>
              <span>A machine learning engineer combining modeling and date engineering</span><br></br>
              <span>During free time, enjoy coffee and art</span><br></br>
              </Col>
          </Row>
          <Row>
            <Col>
              <h2>Experience</h2>
              <Nav.Link 
                href="https://drive.google.com/file/d/1i-D__LSGS7CEESDT0zOWp17QJRu69ELL/view?usp=sharing" 
                className=" name-logo">
                  Resume
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col className="font-left">
              <h2>Yelp Inc.</h2>
              <span>Living in San Francisco</span><br></br>
              <span>A machine learning engineer combining modeling and date engineering</span><br></br>
              <span>During free time, enjoy coffee and art</span><br></br>
              <span>Living in San Francisco</span><br></br>
              <span>A machine learning engineer combining modeling and date engineering</span><br></br>
              <span>During free time, enjoy coffee and art</span><br></br>
              <span>Living in San Francisco</span><br></br>
            </Col>
            <Col className="font-left">
              <h2>Hitachi Inc.</h2>
              <span>Living in San Francisco</span><br></br>
              <span>A machine learning engineer combining modeling and date engineering</span><br></br>
              <span>During free time, enjoy coffee and art</span><br></br>
              <span>Living in San Francisco</span><br></br>
              <span>A machine learning engineer combining modeling and date engineering</span><br></br>
              <span>During free time, enjoy coffee and art</span><br></br>
              <span>Living in San Francisco</span><br></br>
              </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default About;