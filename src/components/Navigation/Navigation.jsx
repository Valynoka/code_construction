import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
	return (
		<nav className={'navigation'}>
			<Link className={'navigation__item'} to = {'posts'}>Посты</Link>
			<Link className={'navigation__item'} to = {'comments'}>Комментарии</Link>
		</nav>
	)
};

export default Navigation;
