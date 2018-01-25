import * as React from 'react'
import { User } from '../../models/Models'
import { Avatar } from 'antd'
import { CSSProperties } from 'react'

const styles = {
	avatar: {
		position: 'relative',
		top: 10
	} as  CSSProperties,
	username: {
		paddingLeft: 5
	} as  CSSProperties
}

export interface IAccountMenuProps {
	user: User
}

class AccountMenu extends React.Component<IAccountMenuProps> {
	/**
	 * Class constructor.
	 */
	constructor(props: IAccountMenuProps) {
		super(props);
	}

	// Render the component.
	render() {

		const { user } = this.props

		return (
			<div>
				<Avatar 
					shape="circle" 
					icon="user" 
					src={user.profileimage}
					style={styles.avatar}
					/>
				<span style={styles.username}>
					{this.props.user.username}
				</span>
			</div>
		);
	}

}

export default AccountMenu;