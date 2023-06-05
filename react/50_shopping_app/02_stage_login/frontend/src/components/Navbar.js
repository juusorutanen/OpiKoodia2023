import {Link} from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {


    if(props.isLogged) {
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
                    <Link to="/" className="nav-link" onClick={props.logout} style={{"color":"white"}}>Log out</Link>
                </li>
                <li className="nav-item" style={{"marginLeft":10}}>
                    <p className="nav-link" style={{"color":"#32cd32"}}>Logged in as {props.user}</p>
                </li>
            </ul>
        </nav>
    )
} else {
    return (
    <nav style={{
        backgroundColor:"#183f33"}}
        className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" style={{"marginLeft":10,color:"white"}}>Shopping App</a>
        <ul className="navbar-nav">
        </ul>
    </nav>
    )
}
}

export default Navbar;