import React, { useState, useEffect, useRef } from "react";
import PlanetsData from "../data/PlanetsData.json";
import "../css/Planets.css";

const Planets = () => {
  const path = process.env.PUBLIC_URL;
  const [selectedItem, setSelectedItem] = useState(null);
  const iframeRef = useRef(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleFullScreenChange = () => {
    if (document.fullscreenElement && iframeRef.current) {
      iframeRef.current.classList.add("fullscreen-iframe");
    } else if (iframeRef.current) {
      iframeRef.current.classList.remove("fullscreen-iframe");
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <>
      <div className="planets__sub-menu">
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[0])} title="Mercury">
          <img src={`${path}/assets/images/planets/mercury.webp`} alt="Mercury" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[1])} title="Venus">
          <img src={`${path}/assets/images/planets/venus.webp`} alt="Venus" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[2])} title="Earth">
          <img src={`${path}/assets/images/planets/earth.webp`} alt="Earth" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[3])} title="Mars">
          <img src={`${path}/assets/images/planets/mars.webp`} alt="Mars" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[4])} title="Jupiter">
          <img src={`${path}/assets/images/planets/jupiter.webp`} alt="Jupiter" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[5])} title="Saturn">
          <img src={`${path}/assets/images/planets/saturn.webp`} alt="Saturn" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[6])} title="Uranus">
          <img src={`${path}/assets/images/planets/uranus.webp`} alt="Uranus" />
        </div>
        <div className="planets__menu-item" onClick={() => handleClick(PlanetsData[7])} title="Neptune">
          <img src={`${path}/assets/images/planets/neptune.webp`} alt="Neptune" />
        </div>
      </div>

      {selectedItem && (
        <div className="planets__container">
          <div className="planets__details">
            <h2>{selectedItem.name}</h2>
            {selectedItem.details.map((detail, index) => (
              <div className="planets__details-item" key={index}>
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="planets__video">
            <iframe
              ref={iframeRef}
              src={selectedItem.video}
              title={selectedItem.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Planets;
