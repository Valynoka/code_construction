import {action, makeAutoObservable} from 'mobx';
import service from "./dataStore.service";



class DataStore {
	comments = [];
	shortListComments = [];
	posts = [];
	shortListPosts = [];
	searchValue = '';

	constructor() {
		makeAutoObservable(this, {
			setShowMore: action.bound,
			setShowMorePost: action.bound,
			setFilterSearch: action.bound,
		})
		service
			.getComments()
			.then((response) => {
				this.comments = response;
			})
			.then(() => {
				this.shortListComments = this.comments.slice(0, 10)
			})
		service
			.getPosts()
			.then((response) => {
				this.posts = response;
			})
			.then(() => {
				this.shortListPosts = this.posts.slice(0, 10)
			})
	}

	//buttons
	setShowMore(){
		this.shortListComments = this.comments.slice(0, this.shortListComments.length + 10)
	}
	setShowMorePost(){
		this.shortListPosts = this.posts.slice(0, this.shortListPosts.length + 10)
	}

	//search
	setFilterSearch(search) {
		this.searchValue = search;
		if(search){
			this.shortListPosts = this.shortListPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
		} else {
			this.shortListPosts = this.posts.slice(0, 10)
		}
	}
}




export default new DataStore();
