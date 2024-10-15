import React, { useState, useEffect } from 'react';
import "../css/VisitorCount.css"

const VisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitorCount = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(visitorCount) + 1;
    setCount(newCount);

    localStorage.setItem('visitorCount', newCount);
  }, []);

  return (
    <div className="visitor-count">
      <span>Visitors: {count}</span>
    </div>
  );
};

export default VisitorCount;
