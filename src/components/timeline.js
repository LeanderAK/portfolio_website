import { React, useState } from 'react';
import { Card, Button, Modal, Row, Col, Container } from 'react-bootstrap';


function Timeline(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <div className='container py-2 mt-4 mb-4'>
        <div className='row no-gutters'>
            <div className='col-sm'> </div>
            <div className='col-sm-1 text-center flex-column d-none d-sm-flex'>
                <div className='row h-50'>
                    <div className='col'> &nbsp;</div>
                    <div className='col'> &nbsp;</div>        
                </div>
            </div>     
        </div>
        <div className='col-sm py-2'>
            <div className='card'>
                <div className='card-body'>
                    <div className='float-right text-muted small'> ASIDASDIUASDZ</div>
                    <h4 className='card-title'> Day 1</h4>
                    <p className='p-text'> welcomajiuhzsdafszd</p>
                </div>
            </div>
        </div>
        <div className='col-sm-1 text-center flex-column d-none d-sm-flex'>
            <div className='row h-50'>
                <div className='col border-right'> &nbsp; </div>
                <div className='col'> &nbsp;</div>
            </div>
            <h5 className='m-2'>
                <span className='badge badge-pill bg-light border'>&nbsp;</span>
            </h5>
            <div className='row h-50'>
                <div className='col border-right'> &nbsp; </div>
                <div className='col'> &nbsp;</div>
            </div>
        </div>

      </div>
      );
  }

  export default Timeline;