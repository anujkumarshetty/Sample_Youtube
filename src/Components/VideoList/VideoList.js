import React from 'react';

/**
 * Displays each video for video list
 * @param {Array} props accepts video URL
 * @returns returns the video
 */
function Video(props) {
  return (
    <div>
      <iframe width="300" height="150" src={props.list}
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; 
        gyroscope; picture-in-picture">
      </iframe>
    </div>
  )
}

/**
 * Lists the Videos on search
 * @param {Array} props accepts array of URL's
 * @returns {Array} returns the video list 
 */
function VideoList(props) {
  return (
    <div>
      {props.list.map((res, index) => { return index > 0 && <Video key={res} list={res} /> })}
    </div>
  )
}

export default VideoList;
