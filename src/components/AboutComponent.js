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
              <h2>Yelp</h2>
              <span className="bold">Ads Machine Learning Engineer, San Francisco</span><p></p>
              <span>Delivered AB testing experiments for Ads Recall to increase user engagement 
              with data analysis, SQL, Redshift, ElasticSearch, Python and Java</span><p></p>
              <span>Delivered features and batches for Ads Targeting to increase model reliability
              and CTR with machine learning, pyspark, Python</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>Hitachi Vantara</h2>
              <span className="bold">Full-Stack Engineer, Santa Clara</span><p></p>
              <span>Delivered features for front-end and backends with Java Spring Boot, ElasticSearch, Angular.JS, React.JS and Docker</span><p></p>
              <span>Designed and developed a real-time log tracking web application to visualize 10k+ logs with ElasticSearch, MongoDB, Vue.js and GoLang</span><p></p>
            </Col>
          </Row>
          <Row>
            <Col className="font-left">
              <h2>Art Exhibition Project</h2>
              <span className="bold">Machine Learning Engineer, New York remote</span><p></p>
              <span>Collaborated with professor Huang and students from School of Visual Arts to apply Variational Autoencoder
              Generative Adversarial Network (VAE GAN) to generate a new Chinese word and do words morphing</span><p></p>
              <span>Provided technical support (Python, deep learning) for their artworks</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>Academia Sinica</h2>
              <span className="bold">NLP Research Assistant, Taiwan</span><p></p>
              <span>Applied SVM to model the entailment relationship between two sentences</span><p></p>
              <span>Preprocessed sentences to unify format and extracted features with Python</span><p></p>
            </Col>
          </Row>
          <Row>
          <Col className="font-left">
              <h2>IBM</h2>
              <span className="bold">Summer intern, Taiwan</span><p></p>
              <span>Improved the insurance sales performance by exploring Cross-Selling for Shin Kong Life, one of the largest insurancecompanies in Taiwan</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>Super Computer Center</h2>
              <span className="bold">Volunteer Research Assistant, San Diego</span><p></p>
              <span>Collaborated with professor process 469 million from file system to database with withShellandPostgreSQL</span><p></p>
            </Col>
          </Row>
          <Row>
          <Col className="font-left">
              <h2>Super Computer Center</h2>
              <span className="bold">Volunteer Research Assistant, San Diego</span><p></p>
              <span>Improved to accuracy 70% to recognize six emotions of stories from GoFundMe by lexicon-based and Bayesian model</span><p></p>
              <span>Applied Regression Analysis to discuss the relationship between emotion score and the donations</span><p></p>
              <span>Applied Chi-Square test to discuss whether or not the amount of donation is the uniform distribution</span><p></p>
            </Col>
            <Col className="font-left">
              <h2>National Taiwan University</h2>
              <span className="bold">Psychology Research Assistant, Taiwan</span><p></p>
              <span>Identified the relationship that more handsome a man is, more affection girl has with market-basket analysis</span><p></p>
              <span>Performed data visualization with ggplot in R and applied SQL to do data analysis</span><p></p>
              <span>Developed a web server with JavaScript (JQuery), PHP, CSS and HTML</span><p></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}
export default About;