import {action, makeAutoObservable} from 'mobx';
import service from "./dataStore.service";



class DataStore {
	comments = [];
	shortListComments = [];
	posts = [];
	shortListPosts = [];
	searchValuePostsTitle = '';
	searchValuePostsBody ='';

	constructor() {
		makeAutoObservable(this, {
			setShowMore: action.bound,
			setShowMorePost: action.bound,
			setFilterPostsTitleSearch: action.bound,
			setFilterPostsBodySearch: action.bound,
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
	setFilterPostsTitleSearch(title) {
		this.searchValuePostsTitle = title;
		if(title){
			this.shortListPosts = this.shortListPosts.filter((post) => post.title.toLowerCase().includes(title.toLowerCase()));
		} else {
			this.shortListPosts = this.posts.slice(0, 10)
		}
	}

	setFilterPostsBodySearch(body) {
		this.searchValuePostsBody = body;
		if (body) {
			this.shortListPosts = this.shortListPosts.filter((postsComm) => postsComm.body.toLowerCase().includes(body.toLowerCase()));
		} else {
			this.shortListPosts = this.posts.slice(0, 10)
		}
	}
}




export default new DataStore();
