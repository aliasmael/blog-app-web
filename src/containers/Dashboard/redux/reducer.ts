import { IStreamState } from '../models/Models'
import { Action } from 'redux-actions';
import {
  FETCH_BLOGS,
  FETCH_BLOGS_REJECTED,
  FETCH_BLOGS_FULFILLED
} from './constants';

const initialState: IStreamState = {
  blogs: {
    kind: "NotAsked"
  }
}

export default function reducer(state: IStreamState = initialState, action: Action<any>): IStreamState {

  switch (action.type) {
    case FETCH_BLOGS: {
      return {
        ...state,
        blogs: {
          kind: "Loading"
        }
      }
    }
    case FETCH_BLOGS_REJECTED: {
      return {
        ...state, 
        blogs: {
          kind: "Failure",
          error: "Something went wrong"
        }
      }
    }
    case FETCH_BLOGS_FULFILLED: {
      return {
        ...state,
        blogs: {
          kind: "Success",
          data: action.payload
        }
      }
    }
  }

  return state
}
