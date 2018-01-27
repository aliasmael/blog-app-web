import * as React from 'react'
import { Blog } from '../models/Models'
import { Card, Avatar, Icon } from 'antd'
import * as moment from 'moment'
import style from './style'

export interface BlogCardProps {
  blog: Blog
}

export default class BlogCard extends React.Component<BlogCardProps, {}> {
  render() {
    const { blog } = this.props

    return (
      <Card style={{ marginBottom: 20 }}>
        <div style={style.cardHeader}>
          <Avatar src={blog.data.user.profileimage} size='large' />
          <div style={style.headerInfo}>
            <h4 style={style.displayName}>{blog.data.user.firstname + ' ' + blog.data.user.lastname}</h4>
            <span>{moment(blog.trace.created.at).format('MMM D')} - 4 min read</span>
          </div>
        </div>

        <div style={style.cardContent}>
          <h2> {blog.data.title} </h2>
          <div style={style.coverImage}>
            <img src={blog.data.coverImage} />
          </div>
          <span> {blog.data.decription} </span>
        </div>

        <div>
          <Icon type="like-o" style={style.icon}/><span style={style.likes}>15</span>
        </div>
      </Card>
    );
  }
}