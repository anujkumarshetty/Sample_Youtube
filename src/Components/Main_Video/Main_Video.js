import React from 'react';
import './Main_Video_Style.css';

//@param {text} search input
//@return - video content as a result of search
function Main_Video(props) {
    return (
        <div className="video">
            {
                props.video.map((res, index) => {
                    return (
                        <div>
                            { index === 0 &&
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
