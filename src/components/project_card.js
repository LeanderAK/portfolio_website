import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container,  } from 'react-bootstrap';
import { ArrowUpRightSquare, Link } from 'react-bootstrap-icons';

function ProjectCard(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <div>
        <a onClick={handleShow}>
          <Card className='m-3 project-card col-auto' >
            <div style={{height:'200px;'}}>
                  <Card.Img className='project-card-image rounded mx-auto' variant="top" src={props.src}/>
            </div>
            <Card.Body className='project-card-body'>
              <Card.Title className="text-left"> 
                <h5>{props.subtitle} </h5>
                <h2>{props.title}</h2> 
              </Card.Title>
              <Card.Text className="text-left"> 
                <p className=''>{props.content}</p>
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