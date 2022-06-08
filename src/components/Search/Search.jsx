import React from 'react';
import './Search.scss';
import dataStore from "../../store/dataStore";
import {observer} from "mobx-react-lite";

const Search = observer(() => {
	const { searchValue, setFilterSearch } = dataStore;
	const handleChange = (e) => {
		setFilterSearch(e.target.value)
	};

	return(
		<input
			type = 'text'
			value={searchValue}
			onChange={handleChange}
		/>
	)
});

export default Search;
