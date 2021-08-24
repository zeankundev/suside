const userJoined = ({
	room,
	username,
	Notification
}) => {
	new Notification({
		title: `User ${username} just joined #${room}`,
		content: ''
	})
}

export default userJoined
