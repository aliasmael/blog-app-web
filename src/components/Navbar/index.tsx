import * as React from 'react'
import { connect } from 'react-redux'
import { User } from '../../models/Models'
import { Store } from '../../models/Models'
import Notifications from './Notifications'
import AccountMenu from './AccountMenu'
import NavMenu from './NavMenu' 
import SearchBox from './SearchBox'
import VerticalDivider from './VerticalDivider'
import { Layout } from 'antd'
import { Row, Col } from 'antd/lib/grid'
import style from './style'

const { Header } = Layout

export interface IAppNavProps {
	user: User
}

function select(state: Store): IAppNavProps {
	return {
		user: state.user.user
	};
}

class Navbar extends React.Component<IAppNavProps> {
	/**
	 * Class constructor.
	 */
	constructor(props: IAppNavProps) {
		super(props);
	}

	// Render the component.
	render() {
		const { user } = this.props;

		return (
			<Header style={style.header}>
				<Row type="flex" justify="center" align="middle">
					<Col span={2}>
						<div style={style.logo}>
							BlogApp
						</div>
					</Col>
					<Col span={8}>
						<SearchBox />
					</Col>
					<Col span={5} offset={5}>
						<NavMenu />
					</Col>
					<Col span={1}>
						<Row type="flex" justify="center">
							<VerticalDivider />								
						</Row>
					</Col>
					<Col span={1}>
						<Row type="flex" justify="start">
							<Notifications notificationCount={5}/>
						</Row>
					</Col>
					<Col span={2}>
						<AccountMenu user={user}/>
					</Col>
				</Row>
			</Header>
		);
	}

}

export default connect(select)(Navbar);