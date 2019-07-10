import axios from 'axios';
import Constants from '../../Constants/Constants';

export default {
	searchApi: (searchInput) => {
		return new Promise((resolve, reject) => {
			axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
			&maxResults=${Constants.max_search_result}&q=${searchInput}
			%20world&key=AIzaSyAIaqAnv3dii8NXqWZKW8GAXxiEAmkpo-Y`)
				.then((response) => {
					let resp = response.data.items.map(item => {
						return Constants.embedUrl + item.id.videoId;
					})
					resolve(resp);
				}).catch(error => {
					reject(error);
					alert(Constants.errorAlert + error);
				})
		})
	},
	onLoad: () => {
		return new Promise((resolve, reject) => {
			axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
			&maxResults=${Constants.onLoad_video}
			&key=AIzaSyAIaqAnv3dii8NXqWZKW8GAXxiEAmkpo-Y`)
				.then((response) => {
					let resp = response.data.items.map(item => {
						return Constants.embedUrl + item.id.videoId;
					})
					resolve(resp);
				}).catch(error => {
					reject(error);
					alert(Constants.errorAlert + error);
				})
		})
	}
} 
