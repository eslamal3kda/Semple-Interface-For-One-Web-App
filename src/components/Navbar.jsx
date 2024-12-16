import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav ">
        <div className="logo">
            <Link to={'/'}><h2>Logo</h2></Link>
        </div>
        <ul>
            <li><NavLink to={'/'} >Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/service'}>Service</NavLink></li>
            <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
        </ul>
        <div className="login">
            <button>Log in</button>
        </div>
    </nav>
  )
}
