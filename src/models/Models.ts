import { IStreamState } from '../components/Stream/models/Models'
import { IUserState } from '../components/LoginForm/models/Models'

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