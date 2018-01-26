import { Trace, User } from '../../../models/Models'
import { RemoteData } from '../../../models/RemoteData'

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
	blogs: RemoteData<string, Blog[]>
}