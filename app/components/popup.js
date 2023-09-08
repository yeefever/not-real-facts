import { useState, useEffect } from 'react';

import '../styles.css'
const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* hook localStorage */
  useEffect(() => {
    const popupViewed = localStorage.getItem('popup_viewed');
    if (popupViewed !== 'true') {
      setTimeout(() => { //delay
        setIsOpen(true);
      }, 500); 
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('popup_viewed', 'true'); // store in local so that it only opens once per session 
  };

  return (
    isOpen && (
      <div className={`popup fade-in`}>
        <div className="context">Watch This Cool Video for Context</div>

        <div className="container">
          <iframe
            src="https://www.youtube.com/embed/A6q3-ue4PNQ"
            title="Embedded YouTube Video"
          ></iframe>
        </div>
        <button className="button-closing" onClick={handleClose}>
          I'm done watching
        </button>
      </div>
    )
  );
}


export default VideoPopup;
