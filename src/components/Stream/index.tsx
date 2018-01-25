import * as React from 'react'
import { BlogCard } from './BlogCard'
import { Blog } from '../../containers/Dashboard/models/Models'
import Navbar from '../Navbar'
import { Row, Col } from 'antd/lib/grid'

export interface IStreamProps {
	blogs: Blog[]
}

const Stream = (props: IStreamProps) => {
	const { blogs } = props

	return (
		<div>
			<Navbar />

			<Row gutter={16} style={{ marginTop: 10, maxWidth: '100%' }}>
				{
					blogs.map((blog: Blog) => (
						<Col span={6} key={blog.id}>
							<BlogCard key={blog.id} blog={blog} />
						</Col>
					))
				}
			</Row>
		</div>
	)
}

export default Stream