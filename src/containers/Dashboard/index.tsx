import * as React from 'react'
import { RemoteData } from '../../models/RemoteData'
import { Blog } from '../../components/Stream/models/Models'
import Navbar from '../../components/Navbar'
import Stream from '../../components/Stream'

// Redux
import { connect } from 'react-redux'
import { Store } from '../../models/Models'

interface IDashboardProps {
	blogs: RemoteData<string, Blog[]>
}

class Dashboard extends React.Component<IDashboardProps> {
  render() {
    return (
      <div>
        <Navbar />
        <Stream blogs={this.props.blogs}/>
      </div>
    )
  }
}

function select(state: Store): IDashboardProps {
	return {
		blogs: state.stream.blogs,
	};
}
export default connect(select)(Dashboard)