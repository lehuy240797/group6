import React from 'react';
import '../css/Videos.css';

const Videos = () => {
  return (
    <div className="library__videos">
      <p>Please refer to more useful videos about this universe:</p>

      <div className="video-section">
        <h3 className="video-title">Our Planet</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/ZjOmLfE-O6I?si=uzr3yGVaHL2_odi0"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VAADUQbloeM?si=xBipygi2phBVJ1lF"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/DYwLsvyYLoU?si=loMdexjHc2rVgZT1"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/xsisPadI5n0?si=sNBpFNtB6sZJdft4"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
        </div>
      </div>

      <div className="video-section">
        <h3 className="video-title">Effects of Climate Changes</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Y3gqoDUtmt4?si=b-hMmMVzLTq6LlGR"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/ckULkfv3Hb0?si=nRBFtZ7GDHJ2bmgm"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/6x8IuJlcXTk?si=__HQbk8SvjBO8AMe"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/31SCn3bcTHc?si=GnlERuJeUibns_qZ"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
        </div>
      </div>

      <div className="video-section">
        <h3 className="video-title">Astronomy</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/QAa2O_8wBUQ?si=jQVVLUy5Eb7FN5fW"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/X4fcI4PMvwg?si=7w8aYpjDzvR90abG"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/JnFbG1cbLB0?si=mFQ7ZuOJQb8JbOfO"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/RLykC1VN7NY?si=fphL00KEa1aTZlqv"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="library__video-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
