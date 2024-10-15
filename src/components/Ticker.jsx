import React, { useState, useEffect } from 'react';
import "../css/Ticker.css"

const Ticker = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ticker">
      <span>{dateTime} | {location}</span>
    </div>
  );
};

export default Ticker;
