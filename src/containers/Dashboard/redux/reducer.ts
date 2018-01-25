import { IStreamState } from '../models/Models'
import { Action } from 'redux-actions';
import {
  FETCH_BLOGS,
  FETCH_BLOGS_REJECTED,
  FETCH_BLOGS_FULFILLED,
  ADD_BLOG,
  DELETE_BLOG,
  EDIT_BLOG
} from './constants';

const initialState: IStreamState = {
  blogs: [],
  fetching: false,
  fetched: false,
  error: false,
}

export default function reducer(state: IStreamState = initialState, action: Action<any>): IStreamState {

  switch (action.type) {
    case FETCH_BLOGS: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_BLOGS_REJECTED: {
      return {
        ...state, 
        fetching: false,
        error: true
      }
    }
    case FETCH_BLOGS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        blogs: action.payload,
      }
    }
    case ADD_BLOG: {
      return {
        ...state,
        blogs: [
          ...state.blogs,
          action.payload
        ],
      }
    }
    case EDIT_BLOG: {
      return {
        ...state,
        blogs: state.blogs.filter(blog =>
          blog.id === action.payload.id
            ? action.payload
            : blog
        ),
      }
    }
    case DELETE_BLOG: {
      return {
        ...state,
        blogs: state.blogs.filter(blog =>
          blog.id !== action.payload
        ),
      }
    }
  }

  return state
}
