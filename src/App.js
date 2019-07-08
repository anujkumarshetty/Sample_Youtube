import React, { Component } from 'react';
import Search from './Components/Search/Search';
import image from './Images/youtube.png';
import ApiCalls from './Components/API/apiCalls';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      URL: []
    }
  }

  handleInputChange = (e) => {
    this.setState(
      {
        input: e.target.value
      }
    )
  }

  handleSearch =  () => {
    ApiCalls.searchApi(this.state.input).then((resp)=>{
      this.setState({ URL: resp })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <img src={image} width="134px" height="79px" alt="Logo" />
            </div>
            <div className="col-12 col-md-7">
              <Search input={this.state.input}
                inputChange={this.handleInputChange}
                search={this.handleSearch} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
