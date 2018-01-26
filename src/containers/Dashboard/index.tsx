import * as React from 'react'
import Navbar from '../../components/Navbar'
import Stream from '../../components/Stream'

export default class DashboardPage extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Navbar />
        <Stream />
      </div>
    )
  }
}
