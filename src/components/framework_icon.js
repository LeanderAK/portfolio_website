import React from 'react';

function FrameworkIcon(props) {
    return (
      <div data-aos={props.aos} data-aos-delay={props.popup_delay} className='mb-2'>
        <img className={`framework-icon ${props.classes}`} style={{ "width" : props.width }} src={props.src}/>
        <br />
        <span className='framework-icon-name font-righteous '> {props.name} </span>
      </div>
    );
  }

  export default FrameworkIcon;