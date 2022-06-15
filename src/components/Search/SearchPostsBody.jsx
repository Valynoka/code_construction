import React from 'react';
import './Search.scss';
import dataStore from "../../store/dataStore";
import {observer} from "mobx-react-lite";

const SearchPostBody = observer(() => {
	const { setFilterPostsBodySearch, searchValuePostsBody } = dataStore;
	const handlePostsBodyChange = (e) => {
		setFilterPostsBodySearch(e.target.value)
	};

	return(
		<input
			type = 'text'
			value={searchValuePostsBody}
			onChange={handlePostsBodyChange}
		/>
	)
});

export default SearchPostBody;
