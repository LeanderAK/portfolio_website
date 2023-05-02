import './css/App.css';
import './css/timeline.css'
import './css/project_card.css'

import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FrameworkIcon from './components/framework_icon';
import ProjectCard from './components/project_card';
import Timeline from './components/timeline'
import { Navbar, Button } from 'react-bootstrap';
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
  const [navbarColor, setNavbarColor] = useState("#000000");

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition, window.innerHeight);
    if(scrollPosition > 0.9 * window.innerHeight)  {
      setNavbarColor("#ffffff")
    } else {
      setNavbarColor("#000000")
    }
    console.log(navbarColor)
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
    
    <div className="App" data-spy="scroll" data-target="#navbar" style={{"--navbar-color" : navbarColor}}>
      <script>
        AOS.init();
      </script>
      <Navbar fixed="top" id='navbar'>
        <Row className='justify-content-between' style={{width: '100%'}}>
          <Col className="text-left">
            <a className='menu-button mr-3' onClick={handleProjectRef}> <span className='menu-button navbar-color'>PROJECTS</span> </a>
            <a className='menu-button ' onClick={handleResumeRef}> <span className='menu-button navbar-color'>CV</span> </a>
            <a className='menu-button ml-3' onClick={handleFrameworksRef}> <span className='menu-button navbar-color'>FRAMEWORKS</span> </a>
          </Col>
          <Col  className="text-right">
            <a href="https://github.com/LeanderAK" target='blank'> 
              <Github className="mt-1 ml-4 navbar-color" size={50}/>
            </a>
            <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'> 
              <Linkedin className="mt-1 ml-4 navbar-color"  size={50}/>
            </a>
          </Col>
        </Row>
      </Navbar>
      <Container fluid className='background-1' id="container1">
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
        <div >
          <h1 className='mt-5' data-aos="fade-up" data-aos-delay="0"> HELLO ASDASD</h1>
          <p className='pl-5 pr-5' data-aos="fade-up" data-aos-delay="0"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <Row className='pt-5'>       
          <div className='col-11'>
            <Row className='justify-content-center '>
              <div data-aos="fade-up" data-aos-delay="0">
                <ProjectCard 
                  src="./images/desertImage.png"
                  title="Divae" 
                  subtitle="Bookclub App"
                  content="Card text blaa bla " 
                  modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
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
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
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
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
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
              </div>
            </Row>
          </div>
          <div className='col-1 col-md-auto'>
            <span className='font-righteous-subtitle verticaltext' ref={projectRef}>PROJECTS</span>
          </div>
        </Row>
        <Row className='pt-5'>
          <div className='col-1 vertical-overflow'>
            <h1 className='font-righteous-subtitle verticaltext' ref={resumeRef}>RESUME</h1>
          </div>
          <div className='col-11'>
            <Timeline />
          </div>

        </Row>
        <Row className='pt-5'>
          <div className='col-11'>
              <Col>
                <Row className='justify-content-center'> 
                  <span className='verticaltext mt-3' style={{fontSize: "20px"}} data-aos="fade-up"> FRONTEND</span>
                  <FrameworkIcon name="React" src="./icons/react_icon.png" popup_delay="0"/>
                  <FrameworkIcon name="Html" src="./icons/html_icon.png" popup_delay="50"/>
                  <FrameworkIcon name="Css" src="./icons/css_icon.png" popup_delay="100"/>
                  <FrameworkIcon name="Ionic" src="./icons/ionic_icon.png" popup_delay="150"/>
                  <FrameworkIcon name="Bootstrap" src="./icons/bootstrap_icon.png" popup_delay="200"/>
                  <FrameworkIcon name="Firebase" src="./icons/firebase_icon.png" popup_delay="250"/>
                </Row>
                <Row className='justify-content-center'>
                  <span className='verticaltext mt-3' style={{fontSize: "20px"}} data-aos="fade-up"> BACKEND</span>
                  <FrameworkIcon name="Express JSSql" src="./icons/express_icon.png" popup_delay="0"/>
                  <FrameworkIcon name="Sql" src="./icons/sql_icon.png" popup_delay="50"/>
                  <FrameworkIcon name="Django" src="./icons/django_icon.png" popup_delay="100"/>
                  <FrameworkIcon name="Docker" src="./icons/docker_icon.png" popup_delay="150"/>
                  <FrameworkIcon name="Elasticsearch" src="./icons/elasticsearch_icon.png" popup_delay="200"/>
                </Row>
                <Row className='justify-content-center '>
                  <span className='verticaltext mt-3' style={{fontSize: "20px"}} data-aos="fade-up"> LANGUAGES</span>
                  <FrameworkIcon name="Python" src="./icons/python_icon.png" popup_delay="0"/>
                  <FrameworkIcon name="Java" src="./icons/java_icon.png" popup_delay="50"/>
                  <FrameworkIcon name="Javascript" src="./icons/js_icon.png" popup_delay="100"/>
                </Row>
                <Row className='justify-content-center'>
                  <span className='verticaltext mt-3' style={{fontSize: "20px"}} data-aos="fade-up"> SOFTWARE</span>
                  <FrameworkIcon name="Blender" src="./icons/blender_icon.png" popup_delay="0"/>
                  <FrameworkIcon name="Unity" src="./icons/unity_icon.png" popup_delay="50"/>
                </Row>
              </Col>
          </div>
          <div className='col-1 vertical-overflow'>
            <h1 className='font-righteous-subtitle verticaltext' ref={frameworksRef}>PROFICIENCIES</h1>
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
