import { Link, NavLink } from 'react-router-dom'
let Navbar = ()=>{
    return (
        <div className="Navbar">
            <span className="nav-item"><Link to="/">Home</Link></span>
            <span className="nav-item"><Link to="/about">About</Link></span>
            <span className="nav-item"><NavLink to="/contact">Contact</NavLink></span>         
        </div>
    )
}
export default Navbar;