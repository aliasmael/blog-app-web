import { IStreamState } from '../containers/Dashboard/models/Models'
import { IUserState } from '../containers/Login/models/Models'

export interface Signature {
	at: string,
	by: string
}

export interface Trace {
	created: Signature,
	updated: Signature
}

export interface User {
	id: string,
	username: string,
	firstname: string,
	lastname: string,
	title: string,
	profileimage: string,
	isGuest: boolean
	company?: string,
}

export interface Store {
  stream: IStreamState,
  user: IUserState
}