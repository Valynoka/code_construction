import React from 'react';
import './Search.scss';
import dataStore from "../../store/dataStore";
import {observer} from "mobx-react-lite";

const SearchPostsTitle = observer(() => {
	const { searchValuePostsTitle, setFilterPostsTitleSearch } = dataStore;
	const handlePostsTitleChange = (e) => {
		setFilterPostsTitleSearch(e.target.value)
	};

	return(
		<input
			type = 'text'
			value={searchValuePostsTitle}
			onChange={handlePostsTitleChange}
		/>
	)
});

export default SearchPostsTitle;
