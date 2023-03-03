import React, { useState } from "react";
import "./Accordion.css";
import datas from "../../Data/Accordiondata";
// import japi from '../../../assets/japi.webp'

function Accordion() {
  const [tabIndex, settabIndex] = useState(0);

  function openTab(e, index) {
    e.preventDefault();
    const content = document.getElementsByClassName("content");
    for (var i = 0; i < 3; i++) {
      content[i].style.maxHeight = 0;
    }
    if (index !== tabIndex) {
      settabIndex(index);
      const content = document.getElementsByClassName("content");
      content[index].style.maxHeight = content[index].scrollHeight + "px";
    } else {
      settabIndex(-1);
    }
  }

  return (
    <div className="acc-bg py-5" style={{ userSelect: "none" }}>
      {datas.map((data, index) => (
        <div
          key={index}
          className={"accordion py-3" + (index === tabIndex ? " accordion-active" : "")}
        >
          <div className="dropdown">
            <button
              type="button"
              className="accordion_button"
              onClick={(e) => openTab(e, index)}
            >
              <img
                className="img-dhol"
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677755900/posua/WhatsApp_Image_2023-03-02_at_16.47.17-removebg-preview_iju7ns.webp"
                alt="dhol"
              />
              <span> {data.heading} </span>
              <img
                className="arrow"
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677754616/posua/arrow_chmfhb.svg"
                alt="arrow"
              />
              <img
                className="img-dhol"
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677755900/posua/WhatsApp_Image_2023-03-02_at_16.47.17-removebg-preview_iju7ns.webp"
                alt="dhol"
              />
            </button>
          </div>
          <div
            className="content"
            style={{ borderRadius: "0", background: "transparent", transform: "none" }}
          >
            <p>{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
