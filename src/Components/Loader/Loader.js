import React from 'react';
import './Loader_Style.css';

//@return - displays loader animation while loading
function Loader(props) {
	return <div>{props.isLoading && <div className="loader"></div>}</div>
}

export default Loader;
