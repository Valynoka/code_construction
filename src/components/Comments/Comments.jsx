import React from 'react';
import {observer} from "mobx-react-lite";
import dataStore from "../../store/dataStore";
import './Comments.scss';

const Comments = observer(() => {
	const { shortListComments, setShowMore } = dataStore;
	return (
		<div className={'comments'}>
			<div className={'comments__wrapper'}>
				<div className={'comments__column'}>
					<h4 className={'comments__title'}>Имя</h4>
					<ul className={'comments__list'}>
						{shortListComments.map((post) => (
							<li className={'comments__item'} key={post.id}>
								<p className={'comments__text'}>{post.name}</p>
							</li>
						))}
					</ul>
				</div>
				<div className={'comments__column'}>
					<h4 className={'comments__title'}>Email</h4>
					<ul className={'comments__list'}>
						{shortListComments.map((post) => (
							<li className={'comments__item'}  key={post.id}>
								<p className={'comments__text'}>{post.email}</p>
							</li>
						))}
					</ul>
				</div>
				<div className={'comments__column'}>
					<h4 className={'comments__title'}>Текст</h4>
					<ul className={'comments__list'}>
						{shortListComments.map((post) => (
							<li className={'comments__item'} key={post.id}>
								<p className={'comments__text'}>{post.body}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<button className={'button comments__button'} type="button" onClick={() => setShowMore()} >Показать еще 10</button>
		</div>
	)
});

export default Comments;
