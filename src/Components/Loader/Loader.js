import React from 'react';
import './Loader_Style.css';

/**
 * Displays loader animation while loading
 * @param {boolean} props state of the loading
 * @returns loader animation
 */
function Loader(props) {
	return <div>{props.isLoading && <div className="loader"></div>}</div>
}

export default Loader;
