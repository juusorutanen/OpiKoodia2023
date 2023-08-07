import {Link} from 'react-router-dom';
import useAppState from '../hooks/useAppState';
import '../App.css';
import useAction from '../hooks/useAction';
import { useState } from 'react';

const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );

const Navbar = (props) => {

const [showNavbar, setShowNavbar] = useState(false);

const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
};


const {isLogged,user} = useAppState();
const {logout} = useAction();

    if(isLogged) {
    return (
        <nav className='navbar'>
            <p className="nav-logo"><Link to="/" className="nav-link">Shopping App</Link></p>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
                <li>
                    <Link to="/" className="nav-link">Shopping List</Link>
                </li>
                <li>
                    <Link to="/form" className="nav-link">Add new item</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link" onClick={logout}>Log out</Link>
                </li>
                <li>
                  <span>Logged in as {user}</span>
                </li>
            </ul>
            </div>
        </nav>
    )
} else {
    return (
    <nav style={{
        backgroundColor:"#ade1ad"}}
        className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" style={{"marginLeft":10,color:"white"}}>Shopping App</a>
        <ul className="navbar-nav">
        </ul>
    </nav>
    )
}
}

export default Navbar;