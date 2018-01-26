import { User } from '../../../models/Models'

export interface IUserState {
	user: User,
	fetching: boolean,
	fetched: boolean,
	error: boolean
}

export interface ILoginResponse {
	token: string
}