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
              <Card.Body className='project-card-body pt-0'>  
                <Row>
                  <Col className="p-0 me-4">
                    {props.framework_icons}            
                    <h3 className='text-start'> {props.title}</h3>
                    <span className='project-card-text ps-4'>{props.content}</span>   
                  </Col>
                  <Col className="p-0 ms-4 text-end">
                    <h5>{props.subtitle}</h5>
                    <Card.Img className='project-card-image img-fluid' onClick={handleShow} src={props.src} alt="Image" />  
                  </Col>
                </Row> 
              </Card.Body>
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
                <h5 className='h5'>{props.subtitle}</h5>
              </Row>
              <Row>
                <h2>{props.title}</h2>
                
                <a href={props.contentLink} className='ms-3' target='_blank'><ArrowUpRightSquare color="white" size={32}/></a>
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