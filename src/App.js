import './css/App.css';
import './css/framework.css'
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
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    if (scrollPosition > 0.95 * window.innerHeight) {
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
      <Navbar fixed="top" id='navbar'>
        <Row className='justify-content-between' style={{ width: '100%' }}>
          <Col className="text-left">
            <a className='mr-3' onClick={handleProjectRef}> <span className='menu-button navbar-color pl-2 pr-2'>PROJECTS</span> </a>
            <a className='' onClick={handleResumeRef}> <span className='menu-button navbar-color pl-2 pr-2'>CV</span> </a>
            <a className=' ml-3' onClick={handleFrameworksRef}> <span className='menu-button navbar-color pl-2 pr-2'>FRAMEWORKS</span> </a>
          </Col>
          <Col className={`fade-object ${isVisible ? 'text-center fade-out' : 'text-center'}`}>
            <span className='navbar-title' > LEANDER KAMMERMEIER</span>
          </Col>
          <Col className="text-right">
            <a href="https://github.com/LeanderAK" target='blank'>
              <Github className="mt-1 ml-4 navbar-color" size={50} />
            </a>
            <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'>
              <Linkedin className="mt-1 ml-4 navbar-color" size={50} />
            </a>
          </Col>
        </Row>
      </Navbar>
      <Container fluid className='background-1 p-0' id="container1">
        <Row>
          <Col className='d-flex align-items-center p-0'>
            <div className='ml-auto' style={{ width: "45%" }}>
              <span className='font-righteous-title verticaltext titletext'>
                LEANDER
              </span>
              <span className='font-righteous-title verticaltext titletext'>
                KAMMERMEIER
              </span>
            </div>
          </Col>
          <Col className="p-0">
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
      <Container fluid className="background-2 p-0">
        <Row className='justify-content-between'>
          <h1 className='font-righteous-subtitle ml-4' data-aos="fade-right">PROFICIECIES</h1>
          <h1 className='font-righteous-subtitle mr-4' data-aos="fade-left" data-aos-delay="50">PROJECTS</h1>
        </Row>
        <Row>
          <Col className="background-color-left left-content-container mr-4" data-aos="fade-up-right" data-aos-delay="0">
            <div >
              <h2 className='mt-5 text-center'> HELLO!</h2>
                <p className='description-text'>
                  Welcome to my Portfolio! I am a Developer. Below you can see the wide variety of Frameworks, Languages and Software I have gotten proficient in through the course of my Bachelors Degree and my Work. I have been able to experience real world full stack development where "GREAT" Design is as important as a robust backend structure which is a REALLY IMPORTANT addition to technical knowledge from university courses."
                </p>
            </div>
            <div className='brace top'></div>
            <div className='text-center justify-content-center'>
              <Row>
                <Col>
                  <h5 data-aos="fade-up"> FRONTEND</h5>
                  <FrameworkIcon name="React" src="./icons/react_icon.png" />
                  <FrameworkIcon name="Ionic" src="./icons/ionic_icon.png" />
                  <FrameworkIcon name="Bootstrap" src="./icons/bootstrap_icon.png" />
                  <FrameworkIcon name="Firebase" src="./icons/firebase_icon.png" />
                  <FrameworkIcon name="Django" src="./icons/django_icon.png" />
                  <FrameworkIcon name="Javascript" src="./icons/js_icon.png" />
                </Col>
                <Col>
                  <h5 data-aos="fade-up"> BACKEND</h5>
                  <FrameworkIcon name="Express JS" src="./icons/express_icon.png" />
                  <FrameworkIcon name="Sql" src="./icons/sql_icon.png" />
                  <FrameworkIcon name="Docker" src="./icons/docker_icon.png" />
                  <FrameworkIcon name="Elasticsearch" src="./icons/elasticsearch_icon.png" />
                  <FrameworkIcon name="Python" src="./icons/python_icon.png" />
                  <FrameworkIcon name="Java" src="./icons/java_icon.png" />
                </Col>
                <Col>
                  <h5 data-aos="fade-up"> ORGANISATION</h5>
                  <FrameworkIcon name="Scrum" src="./icons/java_icon.png" />
                  <FrameworkIcon name="Jira" src="./icons/java_icon.png" />
                  <FrameworkIcon name="Trello" src="./icons/java_icon.png" />
                </Col>
                <Col>
                  <h5 data-aos="fade-up"> CREATIVE</h5>
                  <FrameworkIcon name="Blender" src="./icons/blender_icon.png" />
                  <FrameworkIcon name="Unity" src="./icons/unity_icon.png" />
                  <FrameworkIcon name="Miro" src="./icons/unity_icon.png" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="background-color-right right-content-container ml-4" ref={projectRef} data-aos="fade-up-left" data-aos-delay="50">
            <div className='mt-5'/>
            <ProjectCard
              src="./images/blubble.png"
              title="BLUBBLE"
              subtitle="Intern and working student"
              content="Here I have been working on a multitude of projects, mostly focused on frontend web-development as well as backend architecture for web services."
              modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              frameworks={["ionic_icon", "firebase_icon", "express_icon", "docker_icon"]}
              framework_icons={[<Row className='mt-2'>
                <div className='frameworks-container mr-2'>
                  <div className='frameworks-title'>Frontend</div>
                  <div className='frameworks'>
                    <div className='frameworks-content'>
                      <FrameworkIcon width="30px" classes="mr-2" src={`icons/ionic_icon.png`}/>
                      <FrameworkIcon width="30px" classes="mr-2" src={`icons/react_icon.png`} />
                      <FrameworkIcon width="30px" src={`icons/firebase_icon.png`} />
                    </div>
                  </div>
                </div>
                <div className='frameworks-container'>
                  <div className='frameworks-title'>Backend</div>
                  <div className='frameworks'>
                    <div className='frameworks-content'>
                      <FrameworkIcon width="30px" classes="mr-2" src={`icons/express_icon.png`} />
                      <FrameworkIcon width="30px" src={`icons/docker_icon.png`} />
                    </div>
                  </div>
                </div>
              </Row>
              ]}
              isLeft="True"
            />
            <hr className='horizontal-line mt-4 mb-4' />
            <ProjectCard
              src="./images/blubble.png"
              title="SIMPLE SHRINE ASSET PACK"
              subtitle="Intern and working student"
              content="A cheap and easy Unity 3D Asset pack purchasable in the Unity Asset Store"
              modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              isLeft="False"
              framework_icons={[<Row className='mt-2 justify-content-end'>
                <div className='frameworks-container mr-2'>
                  <div className='frameworks-title'>Creative</div>
                  <div className='frameworks'>
                    <div className='frameworks-content'>
                      <FrameworkIcon width="30px" classes="mr-2" src={`icons/blender_icon.png`} />
                      <FrameworkIcon width="30px" src={`icons/unity_icon.png`} />
                    </div>
                  </div>
                </div>
              </Row>
              ]}
            />
            <hr className='horizontal-line mt-4 mb-4' />
            <ProjectCard
              src="./images/blubble.png"
              title="PORTFOLIO WEBSITE"
              subtitle="Intern and working student"
              content="A cheap and easy Unity 3D Asset pack purchasable in the Unity Asset Store"
              modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              isLeft="True"
              framework_icons={[<Row className='mt-2 '>
                <div className='frameworks-container mr-2'>
                  <div className='frameworks-title'>Frontend</div>
                  <div className='frameworks'>
                    <div className='frameworks-content'>
                      <FrameworkIcon width="30px" src={`icons/react_icon.png`} />
                      <FrameworkIcon width="30px" src={`icons/html_icon.png`} />
                      <FrameworkIcon width="30px" src={`icons/css_icon.png`} />
                      <FrameworkIcon width="30px" src={`icons/bootstrap_icon.png`} />
                    </div>
                  </div>
                </div>
                <div className='frameworks-container mr-2'>
                  <div className='frameworks-title'>Backend</div>
                  <div className='frameworks'>
                    <div className='frameworks-content'>
                      <FrameworkIcon width="30px" src={`icons/js_icon.png`} />
                    </div>
                  </div>
                </div>
              </Row>
              ]}
            />
            <ProjectCard
              src="./images/blubble.png"
              title="Floating Home VR Render"
              subtitle="Floating Home Render"
              content="I built this Unity VR Application on top of the renders for us to fully imerse into the houseboat we were designing. This allowed us a much frequenzy of design iterations."
              modalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              isLeft="False"
              framework_icons={[<Row className='mt-2 justify-content-end'>
                <div className='software-frameworks p-1' style={{ "border-width": "2px" }}>
                  <FrameworkIcon width="30px" src={`icons/blender_icon.png`} />
                  <FrameworkIcon width="30px" src={`icons/unity_icon.png`} />
                </div>
              </Row>
              ]}
            />
          </Col>
        </Row>


      </Container>
      <Container fluid className='background-3 p-0'>
        <Col className='pt-5'>
          <h1 className='font-righteous-subtitle' ref={resumeRef}>CV</h1>
          <Timeline />
        </Col>
      </Container>
      <footer>
        <h3>Leander kammermeier</h3>
        <h4><a href="mailto:leander.kammermeier@gmail.com"></a> MAIL</h4>
      </footer>
    </div>

  );
}

export default App;
