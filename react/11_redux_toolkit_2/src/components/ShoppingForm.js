import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../store/shoppingSlice';

const ShoppingForm = (props) => {
	
	const [state,setState] = useState({
		type:"",
		count:0,
		price:0
	})

	const dispatch = useDispatch();
	
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
		let item = {
			...state
		}
		dispatch(add(item));
		setState({
			type:"",
			count:0,
			price:0
		})
	}
	
	return(
        <div>
            <h1 style = {{"fontWeight":"bold", "color":"white","marginTop":20}}>Add item</h1>
        
		<div style={{
			"backgroundColor":"#2B7C85",
			"margin":"auto",
			"width":"40%",
			"textAlign":"center",
            "borderRadius":"10px",
            "padding":"10px"
		}}>
            
			<form className="mb-20" onSubmit={onSubmit}>
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
				<input style={{
                    "backgroundColor":"#175873",
                    "width":"200px",
                    "border":"none"
            }}type="submit" className="btn btn-success mt-2 btn-lg" value="Add"/>
			</form>
		</div>
        </div>
	)
}

export default ShoppingForm;