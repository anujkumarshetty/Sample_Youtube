import React from 'react';
import './Loader_Style.css';

function Loader(props){
    return(
        <div>
            {
                props.isLoading && <div className="loader"></div>
            }
        </div>
    )
}

export default Loader;
