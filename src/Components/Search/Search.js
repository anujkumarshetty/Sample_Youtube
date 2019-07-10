import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Search-Style.css';
import Constants from '../../Constants/Constants';

//@param {text} search input
//@return - search results
function Search(props) {
    return (
        <div className="search">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder={Constants.search_place_holder}
                value={props.input}
                onChange={props.inputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-success" 
                    type="button" 
                    onClick={props.search}
                    >Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search;
