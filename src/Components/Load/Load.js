import React from 'react';
import '../Load/Load_Style.css';

//@return video contents on first load
function onLoad(props) {
	return (
		<div className="onload">
			{props.load.map(res => {
				return <iframe width="300" height="200" src={res} frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			})}
		</div>
	)
}

export default onLoad;
