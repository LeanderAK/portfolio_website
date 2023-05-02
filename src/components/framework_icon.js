import React from 'react';

function FrameworkIcon(props) {
    return (
      <div data-aos="fade-up" data-aos-delay={props.popup_delay}>
        <img className="framework-icon m-4" src={props.src}/>
        <br />
        <span className='framework-icon-name font-righteous'> {props.name} </span>
      </div>
    );
  }

  export default FrameworkIcon;