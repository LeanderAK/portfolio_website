import FrameworkIcon from './framework_icon';
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
          <Card className='project-card '>
            <a onClick={handleShow}>
              <Card.Body className='project-card-body pt-0'>  
                  {props.isLeft === "True" ? ( 
                    <div>
                      <Row >
                        <Col className="p-0">
                          <h3> {props.title}</h3>
                          <Row className='project-card-content'>
                            <Col sm={8} className='p-0'>
                              <Card.Img className='project-card-image img-fluid' src={props.src} alt="Image" />  
                            </Col>
                            <Col sm={4}>
                              <span className='project-card-text'>{props.content}</span>   
                            </Col>
                          </Row>
                          {props.framework_icons}            
                        </Col>
                      </Row>
                    </div>
                    )
                    :
                    <div>
                      <Row >
                        <Col className="p-0">
                          <h3 className='text-right'> {props.title}</h3>
                          <Row className='project-card-content'>
                            <Col sm={4}>
                              <span className='project-card-text'>{props.content}</span>   
                            </Col>
                            <Col sm={8} className='p-0'>
                              <Card.Img className='project-card-image img-fluid' src={props.src} alt="Image" />  
                            </Col>
                          </Row>
                          {props.framework_icons}             
                        </Col>
                      </Row>
                    </div>
                  }
              </Card.Body>
            </a>
          </Card>
        </Row>
        
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Container>
              <Row>
                <div style={{height:'200px;'}}>
                  <Card.Img className=' rounded mb-2' variant="top" src={props.src}/>
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