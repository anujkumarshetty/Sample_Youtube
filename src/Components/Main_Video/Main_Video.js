import React from 'react';
import './Main_Video_Style.css';

/**
 * Handles the main video content
 * @param {Object} props accepts the API response object
 * @returns {Array} returns the first response video
 */
function Main_Video(props) {
  return (
    <div className="video">
      {
        props.video.map((res, index) => {
          return (
            <div>
              {index === 0 &&
                <iframe width="760" height="415" src={res} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Main_Video;
