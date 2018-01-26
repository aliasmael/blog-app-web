import * as React from 'react'
import { BlogCard } from './BlogCard'
import { Blog } from './models/Models'
import { Row, Col } from 'antd/lib/grid'

import { connect } from 'react-redux'
import { fetchBlogs } from './redux/actions'
import { Store } from '../../models/Models'
import store from '../../redux/store'
import { RemoteData } from '../../models/RemoteData';

export interface IStreamProps {
	blogs: RemoteData<string, Blog[]>
}


class Stream extends React.Component<IStreamProps, {}> {

	componentWillMount() {
		store.dispatch(fetchBlogs())
	}

	render() {
		const { blogs } = this.props;

		switch (blogs.kind) {
			case "NotAsked":
				return ""

			case "Loading":
				return "Loading..."

			case "Failure":
				return blogs.error

			case "Success":
				return (
					<Row gutter={16} style={{ marginTop: 10, maxWidth: '100%' }}>
						{
							blogs.data.map((blog: Blog) => (
								<Col span={6} key={blog.id}>
									<BlogCard key={blog.id} blog={blog} />
								</Col>
							))
						}
					</Row>
				)
		}
	}
}

function select(state: Store): IStreamProps {
	return {
		blogs: state.stream.blogs,
	};
}
export default connect(select)(Stream)