import {
  FETCH_BLOGS,
  FETCH_BLOGS_REJECTED,
  FETCH_BLOGS_FULFILLED,
  ADD_BLOG,
  DELETE_BLOG,
  EDIT_BLOG
} from './constants';
import { Blog } from '../models/Models'
import service from '../service/Mock'

export function fetchBlogs() {
  return function(dispatch: any) {
    dispatch({type: FETCH_BLOGS});

    service.getStream()
      .then((response: Blog[]) => {
        dispatch({type: FETCH_BLOGS_FULFILLED, payload: response})
      })
      .catch((err: Error) => {
        dispatch({type: FETCH_BLOGS_REJECTED, payload: err})
      })
  }
}

export function addBlog(title: string, description: string) {
  return {
    type: ADD_BLOG,
    payload: {
      title,
      description,
    },
  }
}

export function updateBlog(id: string,title: string, description: string) {
  return {
    type: EDIT_BLOG,
    payload: {
      id,
      title,
      description
    },
  }
}

export function deleteBlog(id: string) {
  return { 
    type: DELETE_BLOG,
    payload: id
  }
}
