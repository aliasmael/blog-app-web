import * as React from 'react'
import { RemoteData } from '../../models/RemoteData';
import { Blog } from './models/Models'
import Stream from '../../components/Stream'

import { connect } from 'react-redux'
import { fetchBlogs } from './redux/actions'
import { Store } from '../../models/Models'
import store from '../../redux/store'

export interface IDashboardProps {
  blogs: RemoteData<string, Blog[]>
}

class DashboardPage extends React.Component<IDashboardProps, {}> {
  componentWillMount() {
    store.dispatch(fetchBlogs())
  }

  render() {
    const { blogs } = this.props;

    switch (blogs.kind) {
      case "NotAsked": return ""
      case "Loading": return "Loading..."
      case "Failure": return blogs.error
      case "Success": return <Stream blogs={blogs.data} />
    }
  }
}

function select(state: Store): IDashboardProps {
  return {
    blogs: state.stream.blogs,
  };
}
export default connect(select)(DashboardPage);