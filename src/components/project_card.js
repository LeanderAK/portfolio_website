import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container,  } from 'react-bootstrap';
import { ArrowUpRightSquare, Link } from 'react-bootstrap-icons';

function ProjectCard(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <div>
        <Row className='justify-content-center'>
          <Card className='project-card' data-aos="fade-up" data-aos-delay="0">
            <a onClick={handleShow}>
              <Card.Body className='project-card-body p-2'>
                  <Row>
                    {props.isLeft === "True" ? ( <Row>
                        <Col sm={1} className="p-1">
                          <span className='verticaltext project-card-title'>{props.title} </span>
                        </Col>
                        <Col sm={7} className="p-1">
                          <Card.Img src={props.src} alt="Image" data-aos="fade-up" data-aos-delay="100"/>                 
                        </Col>
                        <Col sm={4} className="p-1 ">
                          <span className='project-card-text'>{props.content}</span>   
                        </Col>
                      </Row>
                      )
                      : 
                      <Row>
                        <Col sm={4} className="p-1">
                          <span className='project-card-text'>{props.content}</span>   
                        </Col>
                        <Col sm={7} className="p-1">
                          <Card.Img src={props.src} alt="Image" data-aos="fade-up" data-aos-delay="100"/>                 
                        </Col>
                        <Col sm={1} className="p-1">
                          <span className='verticaltext project-card-title'>{props.title} </span>
                        </Col>
                      </Row>
                    }
                  </Row>
              </Card.Body>
            </a>
          </Card>
        </Row>
        
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Container>
              <Row>
                <div style={{height:'200px;'}}>
                  <Card.Img className='project-card-image rounded mb-2' variant="top" src={props.src}/>
                </div>
              </Row>
              <Row>
                <h5>{props.subtitle}</h5>
              </Row>
              <Row>
                <h2>{props.title}</h2>
                
                <a href={props.contentLink} className='ml-3' target='_blank'><ArrowUpRightSquare color="white" size={32}/></a>
              </Row>
              <Row>
                <p>
                  {props.content}
                </p>
              </Row>
            </Container>
           
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Body>
        </Modal>
      </div>
      );
  }

  export default ProjectCard;