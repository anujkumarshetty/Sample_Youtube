import React, { Component } from 'react';
import Search from './Components/Search/Search';
import image from './Images/youtube.png';
import ApiCalls from './Components/API/apiCalls';
import Main_Video from './Components/Main_Video/Main_Video';
import Loader from './Components/Loader/Loader';
import './App.css';
import Load from './Components/Load/Load';
import VideoList from './Components/VideoList/VideoList';
import './Components/VideoList/VideoList.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      load: [],
      URL: [],
      isLoading: false
    }
  }

  /**
   * Handles the contents while loading
   * @returns {object} returns the state object with updated values
   */
  componentDidMount() {
    this.setState({ isLoading: true });
    ApiCalls.onLoad().then(res => {
      this.setState(
        {
          load: res,
          isLoading: false
        }
      )
    })
  }

  /**
   * Handles the input change event from the input handler
   * @param {object} e Event from the input handler
   * @returns {object} returns an state object
   */
  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  /**
   * Handles the search based on user input by performing API calls
   * @returns {object} returns the response of API calls and sets the state
   */
  handleSearch = () => {
    this.setState(
      {
        load: [],
        isLoading: true
      });
    ApiCalls.searchApi(this.state.input).then((resp) => {
      this.setState({
        URL: resp,
        isLoading: false
      })
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
        <Load load={this.state.load} />
        <Loader isLoading={this.state.isLoading} />
        <div className="GridSystem">
          <div>
            <Main_Video video={this.state.URL} />
          </div>
          <div className="list">
            <VideoList list={this.state.URL} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
