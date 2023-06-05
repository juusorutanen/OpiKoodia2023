import {useState} from 'react';
import '../App.css'
const LoginPage = (props) => {
	
	const [state,setState] = useState({
		username:"",
		password:""
	})
	
	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		if(state.username.length < 4 ||state.password.length < 8) {
			props.setError("Username must be atleast 4 characters and password 8 characters long.");
			return;
		}
		let user = {
			...state
		}
		if(event.target.name === "register") {
			props.register(user);
		} else {
			props.login(user);
		}
	}
	
	return(
		<div className="login-form">
			<form className="mb-5">
				<label htmlFor="username" className="form-label">Username</label>
				<input type="text"
						name="username"
						id="username"
						className="form-control"
						onChange={onChange}
						value={state.username}/>
				<label htmlFor="password" className="form-label">Password</label>
				<input type="password"
						name="password"
						id="password"
						className="form-control"
						onChange={onChange}
						value={state.password}/>
                <div className='buttons'>
                <button name="login" onClick={onSubmit} className="btn btn-success">Login</button>
				<button name="register" onClick={onSubmit} className="btn btn-register">Register</button>
                </div>
			</form>
		</div>
		
	)
}

export default LoginPage;