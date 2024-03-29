import React from 'react';
import Input from '../components/UI/Input/Input';

const Login = (props) => {
	const [ email, setEmail ] = React.useState({
		value: '',
		touch: false,
		error: false
	});
	const [ password, setPassword ] = React.useState({
		value: '',
		touch: false,
		error: false
	});
	const onSubmit = (event) => {
		event.preventDefault();
		props.history.push('/home');
	};

	return (
		<div className="container pt-5 mt-3">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
						<div className="d-flex justify-content-end social_icon">
							<span>
								<i className="fab fa-facebook-square" />
							</span>
							<span>
								<i className="fab fa-google-plus-square" />
							</span>
							<span>
								<i className="fab fa-twitter-square" />
							</span>
						</div>
					</div>
					<div className="card-body">
						<form onSubmit={onSubmit}>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>

								<Input
									type="email"
									name="email"
									value={email.value}
									onChange={(event) =>
										setEmail({
											value: event.target.value,
											touch: true,
											error: email.value ? false : true
										})}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key" />
									</span>
								</div>
								<Input
									type="password"
									value={password.value}
									name="password"
									onChange={(event) =>
										setPassword({
											value: event.target.value,
											touch: true,
											error: password.value ? false : true
										})}
								/>
							</div>
							<div className="row align-items-center remember">
								<input type="checkbox" />Remember Me
							</div>
							<div className="form-group">
								<input type="submit" value="Login" className="btn float-right login_btn" />
							</div>
						</form>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Don't have an account?<a href="#">Sign Up</a>
						</div>
						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
