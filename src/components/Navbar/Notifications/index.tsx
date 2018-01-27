import * as React from 'react'
import { Badge, Icon } from 'antd'
import style from './style'

export interface INotificationBadgeProps {
	notificationCount: number
}

export default class NotificationBadge extends React.Component<INotificationBadgeProps> {
	/**
	 * Class constructor.
	 */
	constructor(props: INotificationBadgeProps) {
		super(props);
	}

	// Render the component.
	render() {

		return (

			<a href="#">
				<Badge count={this.props.notificationCount}>
					<Icon type="notification" style={style.notificationIcon} />
				</Badge>
			</a>

		);
	}

}