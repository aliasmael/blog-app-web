import * as React from 'react'
import { connect } from 'react-redux'
import { fetchBlogs } from './redux/actions'
import { Blog } from './models/Models'
import { Store } from '../../models/Models'
import  Stream from '../../components/Stream'
import store from '../../redux/store'

export interface IDashboardProps { 
  blogs: Blog[]
}

class DashboardPage extends React.Component<IDashboardProps, {}> {
  componentWillMount() {
    store.dispatch(fetchBlogs())
  }

  render() {
    const { blogs } = this.props;

    return (
      <Stream blogs={blogs} />
    )
  }
}

function select(state: Store): IDashboardProps {
  return {
    blogs: state.stream.blogs,
  };
}
export default connect(select)(DashboardPage);