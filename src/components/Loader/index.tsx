import * as React from 'react'
import { Component } from 'react'
import { Spin, Icon } from 'antd'
import style from './style'

export class Loader extends Component {
  render() {
    const antIcon = <Icon type="loading" style={style.loaderIcon} spin />
    return (
      <Spin indicator={antIcon} />
    )
  }
}
