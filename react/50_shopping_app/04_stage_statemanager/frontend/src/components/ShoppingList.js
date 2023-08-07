import '../App.css';
import {useState} from 'react';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import useAppState from '../hooks/useAppState';
import useAction from '../hooks/useAction';

const ShoppingList = (props) => {
	
	const [state,setState] = useState({
		removeIndex:-1,
		editIndex:-1
	})
	
	const {list} = useAppState();
	const {getList,remove,edit} = useAction();
	
	const [search,setSearch] = useState({
		type:""
	})
	
	const onChange = (event) => {
		setSearch({
			type:event.target.value
		})
	}
	
	
	  const searchByType = () => {
		
		const lowerCaseSearchType = search.type.toLowerCase();
	
		getList(lowerCaseSearchType);
	
		setSearch({
		  type: '',
		});
	  };
	
	const changeMode = (mode,index) => {
		if(mode === "remove") {
			setState({
				removeIndex:index,
				editIndex:-1
			})
		}
		if(mode === "edit") {
			setState({
				removeIndex:-1,
				editIndex:index
			})
		}
		if(mode === "cancel") {
			setState({
				removeIndex:-1,
				editIndex:-1
			})
		}
	}
	
	const removeItem = (id) => {
		remove(id);
		changeMode("cancel");
	}
	
	const editItem = (item) => {
		edit(item);
		changeMode("cancel");
	}

	let items = list.map((item,index) => {
		if(index === state.removeIndex) {
			return(
				<RemoveRow key={item._id} item={item} changeMode={changeMode} removeItem={removeItem}/>
			)
		}
		if(index === state.editIndex) {
			return (
				<EditRow key={item._id} item={item} changeMode={changeMode} editItem={editItem}/>
			)
		}
		return(
			<Row key={item._id} item={item} index={index} changeMode={changeMode}/>
		)
	})

	const totalSum = list.reduce((sum, item) => sum + item.price * item.count, 0);
	
	return(
        <div style={{"marginTop":20}}>
            <h1>Shopping list</h1>
            <div className="search">
            <label htmlFor="search"></label>
            <input type="text"
                    name="search"
                    id="search"
					className="form-control"
                    onChange={onChange}
                    value={search.type}/>
                    <button className="btn search-button btn-success" onClick={searchByType}>Search items by type</button>
                    </div>
		<table style={{"marginTop":50, "padding":"30px"}}className="table table-borderless table-striped">
            
			<thead>
				<tr>
					<th>Type</th>
					<th>Count</th>
					<th>Price</th>
					<th>Remove</th>
					<th>Edit</th>
				</tr>
			</thead>	
			<tbody>
			{items}
			</tbody>
		</table>
		<h1>Total Sum: {totalSum.toFixed(2)}€</h1>
        </div>
	)
}

export default ShoppingList;