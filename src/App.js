import React, { Component } from 'react';
import Search from './Components/Search/Search';
import image from './Images/youtube.png';
import ApiCalls from './Components/API/apiCalls';
import Main_Video from './Components/Main_Video/Main_Video';
import Loader from './Components/Loader/Loader';
import './App.css';
import Load from './Components/Load/Load';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			URL: [],
			isLoading: false,
			load: []
		}
	}

	//@return - sets the state for load and isLoading
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

	//@param {text} captures the search input 
	handleInputChange = (e) => {
		this.setState({ input: e.target.value })
	}

	//@return - Does API call with search input
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
				<div className="container">
					<div className="row">
						<div className="col-md-4"><Main_Video video={this.state.URL} /></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
