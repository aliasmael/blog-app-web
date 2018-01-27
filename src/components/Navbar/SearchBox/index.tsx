import * as React from 'react'
import { Input } from 'antd'
import style from './style'

const Search = Input.Search

export interface ISearchBoxProps {

}

export default class SearchBox extends React.Component<ISearchBoxProps> {

	// Render the component.
	render() {

		return (
			<Search style={style.searchBtn} placeholder="search for blogs" size='large' />
		);
	}

}