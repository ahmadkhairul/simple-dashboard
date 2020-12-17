import React, { useState, useRef, useEffect } from "react";

const Accordion = props => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <p>{props.title}</p>
        <span className="accordion-icon">
          <img src="/dropdown.png" alt="dropdown-icon" />
        </span>
      </button>

      <div ref={contentRef} className="accordion-content">
        {props.children}
      </div>
    </div >
  );
};

export default Accordion;
