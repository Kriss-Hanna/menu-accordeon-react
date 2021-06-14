import React, { useState } from 'react';
import "./Accordion.css";

function Accordion( {title, content} ) {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active)
  }

  
  return (
    <div className={`accordion ${active && "active"}`}>

      <div className="accordion-title" onClick={toggle}>{title} <span className="accordion-icon"></span></div>
      <div className="accordion-content">{content}</div>
      
    </div>
  )
}

export default Accordion;
