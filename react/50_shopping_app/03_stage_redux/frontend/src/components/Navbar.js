import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {logout} from '../actions/loginActions'
import '../App.css';

const Navbar = (props) => {


    const dispatch = useDispatch();
    const state = useSelector(state => state);


    if(state.login.isLogged) {
    return (
        <nav style={{
            backgroundColor:"#183f33"}}
        className="navbar navbar-expand-lg navbar-light">
            <p className="navbar-brand" style={{"marginLeft":10,color:"white"}}><Link to="/" className="nav-link">Shopping App</Link></p>
            <ul className="navbar-nav">
                <li className="nav-item" style={{"marginLeft":10}}>
                    <Link to="/" className="nav-link" style={{"color":"white"}}>Shopping List</Link>
                </li>
                <li className="nav-item" style={{"marginLeft":10}}>
                    <Link to="/form" className="nav-link" style={{"color":"white"}}>Add new item</Link>
                </li>
                <li className="nav-item" style={{"marginLeft":10}}>
                    <Link to="/" className="nav-link" onClick={()=> dispatch(logout(state.login.token))} style={{"color":"white"}}>Log out</Link>
                </li>
                <li className="nav-item" style={{"marginLeft":10}}>
                    <p className="nav-link" style={{"color":"#32cd32"}}>Logged in as {state.login.user}</p>
                </li>
            </ul>
        </nav>
    )
} else {
    return (
    <nav style={{
        backgroundColor:"#183f33"}}
        className="navbar navbar-expand-lg navbar-light">
        <p className="navbar-brand" style={{"marginLeft":10,color:"white"}}>Shopping App</p>
        <ul className="navbar-nav">
        </ul>
    </nav>
    )
}
}

export default Navbar;