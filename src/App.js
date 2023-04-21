import './css/App.css';
import './css/timeline.css'
import './css/project_card.css'
import React, { useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FrameworkIcon from './components/framework_icon';
import ProjectCard from './components/project_card';
import Timeline from './components/timeline'
import { Navbar, Button } from 'react-bootstrap';

function App() {
  const frameworksRef = useRef(null);
  const projectRef = useRef(null)
  const resumeRef = useRef(null)

  const handleFrameworksRef = () => {
    frameworksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleProjectRef = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleResumeRef = () => {
    resumeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <Navbar fixed="top">
        <Row className='justify-content-between' style={{width: '100%'}}>
          <Col className="text-left">
            <button className='menu-button font-righteous mr-3' onClick={handleFrameworksRef}> FRAMEWORKS </button>
            <button className='menu-button font-righteous' onClick={handleProjectRef}> PROJECTS </button>
            <button className='menu-button font-righteous ml-3' onClick={handleResumeRef}> CV </button>
          </Col>
          <Col  className="text-right">
            <a href="https://github.com/LeanderAK" target='blank'> 
              <img className="menu-icon mt-1" src="./icons/github_icon.png" hr/>
            </a>
            <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'> 
              <img className="menu-icon mt-1 ml-4" src="./icons/linkedin_icon.png" hr/>
            </a>


          </Col>
        </Row>
      </Navbar>
      <Container fluid className='background-1'>
        <Row>
          <Col className='d-flex align-items-center'>
            <div className='ml-auto' style={{ width: "45%" }}>
              <span className='font-righteous-title verticaltext titletext'>
                LEANDER 
              </span>
              <span className='font-righteous-title verticaltext titletext'>
                KAMMERMEIER
              </span>
            </div>
          </Col>
          <Col>
            <div className='ml-auto' style={{ width: "95%" }}>
              <model-viewer
                src="./laura.glb" 
                camera-controls 
                shadow-intensity="0.2"
                auto-rotate
                exposure="1"
                > 
              </model-viewer>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="background-2" style={{height:"100%"}}>
        <Row className='pt-5'>       
          <div className='col-11'>
            <Row className='justify-content-center '>
              <ProjectCard 
                src="./images/desertImage.png"
                title="Divae" 
                subtitle="Bookclub App"
                content="Card text blaa bla " 
                modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
              />
              <ProjectCard 
                src="./images/blubble.png"
                title="Blubble" 
                subtitle="Cross platform app"
                content="
                  Blubble is a book club application that is designed to help book lovers structure and plan their 
                  discussions like never before. With Blubble, we have created an innovative tool that offers a wide 
                  range of features to make book club discussions more engaging, organized, and productive.
                  Blubble was created as a student project under the supervision of diva-e over the course of the 5th 
                  semester of my bachelor studies.
                " 
                contentLink="https://showtime.f4.htw-berlin.de/ws22/bachelor/b6-book-reading-club-applikation/"
                />
              <ProjectCard 
                src="./images/desertImage.png"
                title="Exhebition Render" 
                subtitle="Blender rendering Practice"
                content="
                  Blubble is a book club application that is designed to help book lovers structure and plan their 
                  discussions like never before. With Blubble, we have created an innovative tool that offers a wide 
                  range of features to make book club discussions more engaging, organized, and productive.
                  Blubble was created as a student project under the supervision of diva-e over the course of the 5th 
                  semester of my bachelor studies.
                " 
                modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
              />
              <ProjectCard 
                src="./images/desertImage.png"
                title="Simple Shrine Pack" 
                subtitle="Unity Asset store pack"
                content="
                  Blubble is a book club application that is designed to help book lovers structure and plan their 
                  discussions like never before. With Blubble, we have created an innovative tool that offers a wide 
                  range of features to make book club discussions more engaging, organized, and productive.
                  Blubble was created as a student project under the supervision of diva-e over the course of the 5th 
                  semester of my bachelor studies.
                " 
                modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
              />
            </Row>
          </div>
          <div className='col-1'>
            <h1 className='font-righteous-subtitle verticaltext' ref={projectRef}>PROJECTS</h1>
          </div>
        </Row>
        <Row className='pt-5'>
          <div className='col-1'>
            <h1 className='font-righteous-subtitle verticaltext' ref={resumeRef}>RESUME</h1>
          </div>
          <div className='col-11'>
            <Timeline />
          </div>

        </Row>
        <Row>
          <div className='col-11'>
              <Col>
                <Row className='justify-content-center'>
                  <FrameworkIcon name="Python" src="./icons/python_icon.png"/>
                  <FrameworkIcon name="React" src="./icons/react_icon.png"/>
                  <FrameworkIcon name="Html" src="./icons/html_icon.png"/>
                  <FrameworkIcon name="Css" src="./icons/css_icon.png"/>
                  <FrameworkIcon name="Javascript" src="./icons/js_icon.png"/>
                </Row>
                <Row className='justify-content-center'>
                  <FrameworkIcon name="Sql" src="./icons/sql_icon.png"/>
                  <FrameworkIcon name="Django" src="./icons/django_icon.png"/>
                  <FrameworkIcon name="Docker" src="./icons/docker_icon.png"/>
                  <FrameworkIcon name="Elasticsearch" src="./icons/elasticsearch_icon.png"/>
                </Row>
                <Row className='justify-content-center'> 
                  <FrameworkIcon name="Ionic" src="./icons/ionic_icon.png"/>
                  <FrameworkIcon name="Bootstrap" src="./icons/bootstrap_icon.png"/>
                  <FrameworkIcon name="Firebase" src="./icons/firebase_icon.png"/>
                </Row>
                <Row className='justify-content-center'>
                  <FrameworkIcon name="Blender" src="./icons/blender_icon.png"/>
                  <FrameworkIcon name="Unity" src="./icons/unity_icon.png"/>
                </Row>
              </Col>
          </div>
          <div className='col-1'>
            <h1 className='font-righteous-subtitle verticaltext' ref={frameworksRef}>FRAMEWORKS</h1>
          </div>
        </Row>
      </Container>
      <Container fluid className="background-3">
        <footer>
          <h3>Leander kammermeier</h3>
          <h4><a href="mailto:leander.kammermeier@gmail.com"></a></h4>
        </footer>
      </Container>
    </div>
    
  );
}

export default App;
