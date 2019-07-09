import React, { Component } from 'react';
import Search from './Components/Search/Search';
import image from './Images/youtube.png';
import ApiCalls from './Components/API/apiCalls';
import Main_Video from './Components/Main_Video/Main_Video';
import Loader from './Components/Loader/Loader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      URL: [],
      isLoading : false
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSearch =  () => {
    this.setState({ isLoading : true});
    ApiCalls.searchApi(this.state.input).then((resp)=>{
      this.setState({ 
        URL: resp,
        isLoading : false
       })
      console.log(this.state.URL);
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
        <Loader isLoading={this.state.isLoading}/>
        <Main_Video video={this.state.URL}/>
      </div>
    );
  }
}

export default App;
