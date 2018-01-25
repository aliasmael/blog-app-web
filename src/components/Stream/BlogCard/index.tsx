import * as React from "react"
import { Blog } from "../../../containers/Dashboard/models/Models"
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export interface BlogCardProps {
  blog: Blog
}

export class BlogCard extends React.Component<BlogCardProps, {}> {
  render() {
    return (
      <Card
        key={this.props.blog.id}
        cover={<img alt={this.props.blog.data.title} src={this.props.blog.data.coverImage} />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        style={{marginBottom: 10}}
        >
        <Meta
          avatar={<Avatar src="assets/images/user_default.png" />}
          title={this.props.blog.data.title}
          description={this.props.blog.data.decription}
        />
      </Card>
    );
  }
}