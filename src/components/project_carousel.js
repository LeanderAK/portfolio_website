import FrameworkIcon from './framework_icon';
import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container,  } from 'react-bootstrap';
import { ArrowUpRightSquare, Link } from 'react-bootstrap-icons';
import ProjectCard from './project_card';
import Carousel from 'react-bootstrap/Carousel';

function ProjectCarousel(props) {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={10000000}>
                    <Card.Body className='p-5'>
                        <ProjectCard
                        src="./images/blubble.png"
                        title="BACHELOR-THESIS"
                        subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                        frameworks={["ionic_icon", "firebase_icon", "express_icon", "docker_icon"]}
                        framework_icons={[<div className='m-0 ps-4 d-flex flex-row text-center'>
                            <FrameworkIcon width="" classes="" name="Ionic" src={`icons/ionic_icon.png`}/>
                            <FrameworkIcon width="" classes="ms-2" name="React" src={`icons/react_icon.png`}/>
                            <FrameworkIcon width="" classes="ms-2" name="Blender" src={`icons/blender_icon.png`}/>
                            <FrameworkIcon width="" classes="ms-2" name="Css" src={`icons/css_icon.png`}/>
                        </div>
                        ]}
                        />
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Body className='p-5'> 
                        <ProjectCard
                        src="./images/blubble.png"
                        title="BACHELOR-THESIS"
                        subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                        frameworks={["ionic_icon", "firebase_icon", "express_icon", "docker_icon"]}
                        framework_icons={[<div className='m-0 ps-4 d-flex flex-row'>
                            <FrameworkIcon width="" classes="" src={`icons/ionic_icon.png`}/>
                            <FrameworkIcon width="" classes="" src={`icons/react_icon.png`}/>
                            <FrameworkIcon width="" classes="" src={`icons/blender_icon.png`}/>
                            <FrameworkIcon width="" classes="" src={`icons/css_icon.png`}/>
                        </div>
                        ]}
                        />
                    </Card.Body>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Body className='p-5'>
                        <ProjectCard
                        src="./images/blubble.png"
                        title="BACHELOR-THESIS"
                        subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                        frameworks={["ionic_icon", "firebase_icon", "express_icon", "docker_icon"]}
                        framework_icons={[<div className='m-0 ps-4 d-flex flex-row'>
                            <FrameworkIcon width="" classes="" src={`icons/ionic_icon.png`}/>
                            <FrameworkIcon width="" classes="" src={`icons/react_icon.png`}/>
                            <FrameworkIcon width="" classes="" src={`icons/blender_icon.png`}/>
                            <FrameworkIcon width="" classes="" src={`icons/css_icon.png`}/>
                        </div>
                        ]}
                        />
                    </Card.Body>
                </Carousel.Item>
            </Carousel>
        </div>
      );
  }

  export default ProjectCarousel;