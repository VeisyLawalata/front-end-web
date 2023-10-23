function LoginButton(props) {
	return (
		<button onClick={props.onCLick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}