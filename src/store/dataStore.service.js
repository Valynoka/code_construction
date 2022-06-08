import axios from "axios";

const commentsApi = 'https://jsonplaceholder.typicode.com/comments';
const postsApi = 'https://jsonplaceholder.typicode.com/posts';

const service = {
	getComments() {
		return axios.get(`${commentsApi}`)
			.then((response) => response.data)
	},
	getPosts() {
		return axios.get(`${postsApi}`)
			.then((response) => response.data)
	},
};

export default service;
