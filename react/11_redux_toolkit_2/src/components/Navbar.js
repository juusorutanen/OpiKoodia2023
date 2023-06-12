import {Link} from 'react-router-dom';


const Navbar = (props) => {

    return (
        <nav style={{
            backgroundColor:"#87ACA3"}}
        className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" style={{"marginLeft":10}}>Shopping App</a>
            <ul className="navbar-nav">
                <li className="nav-item" style={{"marginLeft":10}}>
                    <Link to="/" className="nav-link">Shopping List</Link>
                </li>
                <li className="nav-item" style={{"marginLeft":10}}>
                    <Link to="/form" className="nav-link">Add new item</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;