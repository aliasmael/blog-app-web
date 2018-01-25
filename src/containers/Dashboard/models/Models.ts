import { Trace, User } from '../../../models/Models'

interface BlogData {
	title: string,
	decription: string,
	coverImage: string,
	user: User
}

export interface Blog {
	id: string,
	data: BlogData,
	trace: Trace
}

export interface IStreamState {
	blogs: Blog[],
	fetching: boolean,
	fetched: boolean,
	error: boolean
}