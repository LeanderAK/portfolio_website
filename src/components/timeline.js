import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container, Badge } from 'react-bootstrap';


function Timeline(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="right-content-container">
           <div className="main-timeline">
                <div className="timeline timeline-right" data-aos="fade-up" data-aos-delay="0">
                    <Card className='background-color-left timeline-shadow'>
                        <Card.Body className='p-4'>
                            <h5 className=''> April 2022 - Present </h5>
                            <h4 className=''> [j]karef Gmbh - Internship & Working student </h4>
                            <p className="mb-0">Full Stack development building Webapps for customers including web scrapers and historic datamodelation. 
                            </p>
                            <span className='timeline-type-text'> Work </span>
                        </Card.Body>
                    </Card>
                </div>
                <div className="timeline timeline-right" data-aos="fade-up" data-aos-delay="0">
                    <Card className='background-color-left timeline-shadow'>
                        <Card.Body className='p-4'>
                            <h5 className=''> March 2021 - March 2022</h5>
                            <h4 className='h4'> Designation - Freelance work </h4>
                            <p className="mb-0">Part-time work for Kjubex Project ‘House Boat’ including 3D Modelling and rendering, Setting up VR applications for visualisation in Unity and Product research for interior products and solutions. 
                            </p>
                            <span className='timeline-type-text'> Work </span>
                        </Card.Body>
                    </Card>
                </div>
                <div className="timeline timeline-left timeline-gap-close" data-aos="fade-up" data-aos-delay="0">
                    <Card className='background-color-right timeline-shadow'>
                        <Card.Body className='p-4'>
                            <h5 className=''> Oktober 2020 - Present </h5>
                            <h4 className=''>University of Applied Sciences - HTW BERLIN</h4>
                            <p className=''>
                            B.Sc in International Media Informatics with Focus on media applications of computer science, including Web,3D, image processing, computer graphics and software engineering
                            </p>
                            <span className='timeline-type-text'> Education </span>
                        </Card.Body>
                    </Card>
                </div>
                <div className="timeline timeline-right" data-aos="fade-up" data-aos-delay="0">
                    <Card className='background-color-left timeline-shadow'>
                        <Card.Body className='p-4'>
                            <h5 className=''> January 2015 </h5>
                            <h4 className=''> Mobile Learning Labs GmbH - Internship </h4>
                            <p className="mb-0">Student internship including translating app content from german to english, testing of learning application prototype and gaining insight into development of mobile application 
                            </p>
                            <span className='timeline-type-text'> Student Internship </span>
                        </Card.Body>
                    </Card>
                </div>
                <div className="timeline timeline-left timeline-gap-close" data-aos="fade-up" data-aos-delay="0">
                    <Card className='background-color-right timeline-shadow'>
                        <Card.Body className='p-4'>
                            <h5 className=''> June 2011 to June 2019 </h5>
                            <h4 className=''> Freie Schule Anne Sophie Berlin - Bilingual High School (German/English)   </h4>
                            <p className="mb-0">Abitur (University entrance diploma) with an average grade of 1.9 with Art and English as main courses.
                            </p>
                            <span className='timeline-type-text'> Education </span>
                        </Card.Body>
                    </Card>
                </div>
           </div>
        </div>
      );
  }

  export default Timeline;