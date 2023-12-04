import '../App.css'
import {useState} from 'react';
import useAction from '../hooks/useAction';


const LoginPage = (props) => {
	
	const [state,setState] = useState({
		username:"",
		password:""
	})

	const {register,login,setError} = useAction();
	
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
			setError("Username must be atleast 4 characters and password 8 characters long.");
			return;
		}
		let user = {
			...state
		}
		if(event.target.name === "register") {
			register(user);
		} else {
			login(user);
		}
	}
	
	return(
		<div className="login-container">
		<div className="login-form">
			<div className="info-text">
				<p>Please login or create an account to make a shopping list.</p>
			</div>
			<form>
			<h1>Login or register here</h1>
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
	</div>
		
	)
}

export default LoginPage;