import {useState} from 'react';
import useAction from '../hooks/useAction';
import '../App.css'


const ShoppingForm = (props) => {
	
	const [state,setState] = useState({
		type:"",
		count:0,
		price:0
	})
	
	const {add} = useAction();
	
	const onChange = (event) => {
		const { name, value } = event.target;

		const lowercaseValue = name === "type" ? value.toLowerCase() : value;
	
		setState((prevState) => {
		  return {
			...prevState,
			[name]: lowercaseValue
		  };
		});
	  };
	
	const onSubmit = (event) => {
		event.preventDefault();
		let item = {
			...state
		}
		add(item);
		setState({
			type:"",
			count:0,
			price:0
		})
	}
	
	return(
        <div>
            <h1>Add item</h1>
        
		
            <div className='login-form'>
				<form onSubmit={onSubmit}>
					<label htmlFor="type" className="form-label">Type:</label>
					<input type="text"
							className="form-control"
							name="type"
							id="type"
							onChange={onChange}
							value={state.type}/>
					<label htmlFor="count" className="form-label">Count:</label>
					<input type="number"
							className="form-control"
							name="count"
							id="count"
							onChange={onChange}
							value={state.count}/>
					<label htmlFor="price" className="form-label">Price:</label>
					<input type="number"
							className="form-control"
							name="price"
							id="price"
							step="0.01"
							onChange={onChange}
							value={state.price}/>
					<input type="submit" style={{marginTop:"20px",width:"100%"}}className="btn btn-success" value="Add"/>
				</form>
			</div>
		</div>
	)
}

export default ShoppingForm;