import React from 'react';

function FrameworkIcon(props) {
    return (
      <div data-aos={props.aos} data-aos-delay={props.popup_delay} className=''>
        <img className="framework-icon m-1" style={{ "width" : props.width }} src={props.src}/>
        <br />
        <span className='framework-icon-name font-righteous '> {props.name} </span>
      </div>
    );
  }

  export default FrameworkIcon;