import './css/App.css';
import './css/framework.css'
import './css/timeline.css'
import './css/project_carousel.css'

import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FrameworkIcon from './components/framework_icon';
import ProjectCarousel from './components/project_carousel';
import Timeline from './components/timeline'
import { Navbar, Button, Card } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';

function App() {
  const frameworksRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);

  const handleFrameworksRef = () => {
    frameworksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleProjectRef = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleResumeRef = () => {
    resumeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    if (scrollPosition > 1 * window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  useEffect(() => {
    AOS.init();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <div className="app" data-spy="scroll" data-target="#navbar">
      <script>
        AOS.init();
      </script>
      {/* ${isVisible ? 'text-center fade-out' : 'text-center'}` */}
      <Navbar className={`fade-object ${isVisible ? 'text-center fade-out' : 'text-center'}`} fixed="top" id='navbar'>
        <Row className='justify-content-between' style={{ width: '100%' }}>
          <Col className="text-left">
            <a className='me-3' onClick={handleProjectRef}> <span className='menu-button navbar-color ps-2 pe-2'>PROJECTS</span> </a>
            <a className='' onClick={handleResumeRef}> <span className='menu-button navbar-color ps-2 pe-2'>CV</span> </a>
            <a className=' ms-3' onClick={handleFrameworksRef}> <span className='menu-button navbar-color ps-2 pe-2'>FRAMEWORKS</span> </a>
          </Col>
          <Col className="text-center">
            <span className='navbar-title' > LEANDER KAMMERMEIER</span>
          </Col>
          <Col className="text-right">
            <a href="https://github.com/LeanderAK" target='blank'>
              <Github className="mt-1 ms-4 navbar-color" size={50} />
            </a>
            <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'>
              <Linkedin className="mt-1 ms-4 navbar-color" size={50} />
            </a>
          </Col>
        </Row>
      </Navbar>
      <Container fluid className='background-1 p-0' id="container1">
          <Col className="p-0 text-center">
            <Row>
              <h1 className='titletext pt-4'>LEANDER</h1>
            </Row>
            <Row>
              <model-viewer
                src="./laura.glb"
                camera-controls
                shadow-intensity="0.2"
                auto-rotate
                exposure="1"
              >
              </model-viewer>
            </Row>
            <Row>
                <h1 className='titletext titletext-bottom'>KAMMERMEIER</h1>
                <div className='d-flex flex-row justify-content-center'>
                  <a href="https://github.com/LeanderAK" target='blank'>
                    <Github className="mt-1 ms-2 me-2 navbar-color" size={75} />
                  </a>
                  <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'>
                    <Linkedin className="mt-1 ms-2 me-2 navbar-color" size={75} />
                  </a>
                </div>
                <h1>V</h1>
            </Row>
          </Col>
      </Container>
      <Container fluid className='background-3 p-0'>
        <Col className='pt-5 text-center'>
          <h1 className='font-righteous-subtitle' ref={projectRef}>Projects</h1>
          <ProjectCarousel />
        </Col>
      </Container>
      <Container fluid className="background-2 p-0">
        <Row>
          <Col xs={6} className='p-0 text-center'>
            <h1 className='font-righteous-subtitle' data-aos="fade-right">PROFICIENCIES</h1>
            <Card className='background-color-left left-content-container'>
                <Card.Body className='p-4'>
                  <div >
                    <h2 className='mt-5 text-center'> HELLO!</h2>
                      <p className='description-text'>
                        Welcome to my Portfolio! I am a Web Developer with full stack experience. Below you can see the wide variety of Frameworks, Languages and Software I have gotten proficient in through the course of my Bachelors Degree and my Work. I have been able to experience real world full stack development where user centered Design is as important as a robust backend structure which is a extremely valuable addition to technical knowledge from university courses."
                      </p>
                  </div>
                  <div className='brace top'></div>
                  <div className='text-center justify-content-center'>
                    <Row>
                      <Col>
                        <h5 data-aos="fade-up"> FRONTEND</h5>
                        <FrameworkIcon aos="fade-up" name="React" src="./icons/react_icon.png" />
                        <FrameworkIcon aos="fade-up" name="Ionic" src="./icons/ionic_icon.png" />
                        <FrameworkIcon aos="fade-up" name="Bootstrap" src="./icons/bootstrap_icon.png" />
                        <FrameworkIcon aos="fade-up" name="Firebase" src="./icons/firebase_icon.png" />
                        <FrameworkIcon aos="fade-up" name="Django" src="./icons/django_icon.png" />
                        <FrameworkIcon aos="fade-up" name="Javascript" src="./icons/js_icon.png" />
                      </Col>
                      <Col>
                        <h5 data-aos="fade-up"> BACKEND</h5>
                        <FrameworkIcon aos="fade-up" popup_delay="50" name="Express JS" src="./icons/express_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="50" name="Sql" src="./icons/sql_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="50" name="Docker" src="./icons/docker_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="50" name="Elasticsearch" src="./icons/elasticsearch_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="50" name="Python" src="./icons/python_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="50" name="Java" src="./icons/java_icon.png" />
                      </Col>
                      <Col>
                        <h5 data-aos="fade-up"> ORGANISATION</h5>
                        <FrameworkIcon aos="fade-up" popup_delay="100" name="Scrum" src="./icons/java_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="100" name="Jira" src="./icons/java_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="100" name="Trello" src="./icons/java_icon.png" />
                      </Col>
                      <Col>
                        <h5 data-aos="fade-up"> CREATIVE</h5>
                        <FrameworkIcon aos="fade-up" popup_delay="150" name="Blender" src="./icons/blender_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="150" name="Unity" src="./icons/unity_icon.png" />
                        <FrameworkIcon aos="fade-up" popup_delay="150" name="Miro" src="./icons/unity_icon.png" />
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className='p-0 text-center'>
            <h1 className='font-righteous-subtitle' data-aos="fade-left" data-aos-delay="50">CV</h1>
                <Timeline />
          </Col>
        </Row>
      </Container>
      <footer>
        <h3>Leander kammermeier</h3>
        <h4><a href="mailto:leander.kammermeier@gmail.com"></a> MAIL</h4>
      </footer>
    </div>

  );
}

export default App;
