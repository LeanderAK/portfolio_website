import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container } from 'react-bootstrap';


function Timeline(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            <Col>
                EDUCATION
                <Row className='justify-content-center'>
                    <Card className='m-1 project-card' style= {{width: '50rem'}}>
                        <Card.Body>
                            <Card.Title className="text-left"> 
                                <h5>University of Applied Sciences - HTW BERLIN</h5>
                                <h2>Oktober 2020 - Present</h2> 
                            </Card.Title>
                            <Card.Text className="text-left"> 
                                <p className=''>B.Sc in International Media Informatics with Focus on media applications of computer science, including Web,3D, image processing, computer graphics and software engineering</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className='justify-content-center'>
                    <Card className='m-1 project-card' style= {{width: '50rem'}}>
                        <Card.Body>
                        <Card.Title className="text-left"> 
                            <h5>Freie Schule Anne Sophie Berlin - Bilingual High School (German/English)  </h5>
                            <h2>June 2011 to June 2019</h2> 
                        </Card.Title>
                        <Card.Text className="text-left"> 
                            <p className=''>Abitur (University entrance diploma) with an average grade of 1.9 </p>
                        </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Row>
                WORK EXPERIENCE AND INTERNSHIPS
                <Row className='justify-content-center'>
                    <Card className='m-1 project-card' style= {{width: '50rem'}}>
                    <Card.Body>
                            <Card.Title className="text-left"> 
                                <h5>[j]karef Gmbh - Internship & Working student</h5>
                                <h2>April 2022 - Present</h2> 
                            </Card.Title>
                            <Card.Text className="text-left"> 
                                <p className=''>B.Sc in International Media Informatics with Focus on media applications of computer science, including Web,3D, image processing, computer graphics and software engineering</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className='justify-content-center'>
                    <Card className='m-1 project-card' style= {{width: '50rem'}}>
                    <Card.Body>
                            <Card.Title className="text-left"> 
                                <h5>Designation - Freelance work</h5>
                                <h2>March 2021 - March 2022</h2> 
                            </Card.Title>
                            <Card.Text className="text-left"> 
                                <p className=''>Part-time work for Kjubex Project ‘House Boat’ including 3D Modelling and rendering, Setting up VR applications for visualisation in Unity and Product research for interior products and solutions. </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className='justify-content-center'>
                    <Card className='m-1 project-card' style= {{width: '50rem'}}>
                    <Card.Body>
                            <Card.Title className="text-left"> 
                                <h5>Mobile Learning Labs GmbH - Internship</h5>
                                <h2>January 2015</h2> 
                            </Card.Title>
                            <Card.Text className="text-left"> 
                                <p className=''>Student internship including translating app content from german to english, testing of learning application prototype and gaining insight into development of mobile application</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>

        </div>
      );
  }

  export default Timeline;