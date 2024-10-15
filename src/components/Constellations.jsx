import React, { useState, useEffect, useRef } from "react";
import ConstellationData from "../data/ConstellationData.json";
import "../css/Constellation.css";

const Constellation = () => {
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
      <div className="constellations">
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[0])} title="Aries">
          <img src="/assets/images/constellations/aries.jpg" alt="Aries" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[1])} title="Taurus">
          <img src="/assets/images/constellations/taurus.jpg" alt="Taurus" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[2])} title="Gemini">
          <img src="/assets/images/constellations/gemini.jpg" alt="Gemini" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[3])} title="Cancer">
          <img src="/assets/images/constellations/cancer.jpg" alt="Cancer" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[4])} title="Leo">
          <img src="/assets/images/constellations/leo.jpg" alt="Leo" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[5])} title="Virgo">
          <img src="/assets/images/constellations/virgo.jpg" alt="Virgo" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[6])} title="Libra">
          <img src="/assets/images/constellations/libra.jpg" alt="Libra" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[7])} title="Scorpius">
          <img src="/assets/images/constellations/scorpius.jpg" alt="Scorpius" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[8])} title="Sagittarius">
          <img src="/assets/images/constellations/sagittarius.jpg" alt="Sagittarius" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[9])} title="Capricorn">
          <img src="/assets/images/constellations/capricorn.jpg" alt="Capricorn" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[10])} title="Aquarius">
          <img src="/assets/images/constellations/aquarius.jpg" alt="Aquarius" />
        </div>
        <div className="constellations-menu" onClick={() => handleClick(ConstellationData[11])} title="Pisces">
          <img src="/assets/images/constellations/pisces.jpg" alt="Pisces" />
        </div>
      </div>

      {selectedItem && (
        <div className="constellations-menu-details">
          <h2>{selectedItem.name}</h2>
          <div className="constellations-menu-details-content">
            {selectedItem.details.map((detail, index) => (
              <div className="details-item" key={index}>
                <span className="icon">&#9679;</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="constellations-video">
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

export default Constellation;
