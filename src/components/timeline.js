import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container } from 'react-bootstrap';


function Timeline(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            <Col>
                <div className="justify-content-center"> 
                    <div className="timeline-item" data-aos="fade-up">
                        <h4>Oktober 2020 - Present</h4> 
                        <h3>University of Applied Sciences - HTW BERLIN</h3>
                        <p className=''>
                            B.Sc in International Media Informatics with Focus on media applications of computer science, including Web,3D, image processing, computer graphics and software engineering
                        </p>
                        <div className="timeline-secondary-item">
                            <h4>[j]karef Gmbh - Internship & Working student</h4>
                            <h3>April 2022 - Present</h3> 
                            <p className=''>B.Sc in International Media Informatics with Focus on media applications of computer science, including Web,3D, image processing, computer graphics and software engineering</p>
                        </div>
                        <div className="timeline-secondary-item">
                            <h4>Designation - Freelance work</h4>
                            <h3>March 2021 - March 2022</h3> 
                            <p className=''>Part-time work for Kjubex Project ‘House Boat’ including 3D Modelling and rendering, Setting up VR applications for visualisation in Unity and Product research for interior products and solutions. </p>
                        </div>
                    </div>
                    <div className="timeline-item" data-aos="fade-up">
                        <h4>Freie Schule Anne Sophie Berlin - Bilingual High School (German/English)  </h4>
                        <h3>June 2011 to June 2019</h3> 
                        <p className=''>Abitur (University entrance diploma) with an average grade of 1.9 </p>
                        <div className="timeline-secondary-item">
                            <h4>Mobile Learning Labs GmbH - Internship</h4>
                            <h3>January 2015</h3> 
                            <p className=''>Student internship including translating app content from german to english, testing of learning application prototype and gaining insight into development of mobile application</p>
                        </div>
                    </div>
                </div>
            </Col>
        </div>
      );
  }

  export default Timeline;