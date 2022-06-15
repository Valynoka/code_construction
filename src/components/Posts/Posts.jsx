import React from 'react';
import dataStore from "../../store/dataStore";
import './Posts.scss'
import {observer} from "mobx-react-lite";
import SearchPostsTitle from "../Search/SearchPostsTitle";
import SearchPostsBody from "../Search/SearchPostsBody";

const Posts = observer(() => {
	const { shortListPosts, setShowMorePost } = dataStore

	return (
		<div className={'posts posts__wrapper'}>
			<table className={'posts__table'}>
				<tr className={'posts__cell'}>
					<th className={'posts__id'}>Id</th>
					<th className={'posts__title'}><SearchPostsTitle/>Заголовок</th>
					<th className={'posts__body'}><SearchPostsBody/>Отзыв</th>
				</tr>
				{shortListPosts.map((post) => (
					<tr className={'posts__cell'} key={post.id}>
						<td className={'posts__id'}>{post.userId}</td>
						<td className={'posts__title'}>{post.title}</td>
						<td className={'posts__body'}>{post.body}</td>
					</tr>
				))}
			</table>
			<button className={'button posts__button'} type="button" onClick={() => setShowMorePost()} >Показать еще 10</button>
		</div>
	)
});

export default Posts;
