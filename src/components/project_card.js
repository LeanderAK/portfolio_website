import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container } from 'react-bootstrap';


function ProjectCard(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <div>
        <a onClick={handleShow}>
          <Card className='m-5 project-card' style= {{width: '20rem'}}>
            <div style={{height:'200px;'}}>
                  <Card.Img className='project-card-image rounded mx-auto' variant="top" src={props.src}/>
            </div>
            <Card.Body>
              <Card.Title className="text-left"> 
                <h5>{props.subtitle} </h5>
                <h2>{props.title}</h2> 
              </Card.Title>
              <Card.Text className="text-left"> 
                <p className='project-card-text'>{props.content}</p>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </a>
        
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
                <h1>{props.title}</h1>
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