import { Link, NavLink, withRouter } from 'react-router-dom'
let Navbar = (props)=>{
    //Redirecting to contact component after 2 sec
    // setTimeout(()=>{
    //     props.history.push('/contact');
    // }, 2000);
    return (
        <div className="Navbar">
            <span className="nav-item"><Link to="/">Home</Link></span>
            <span className="nav-item"><Link to="/about">About</Link></span>
            <span className="nav-item"><NavLink to="/contact">Contact</NavLink></span>         
        </div>
    )
}
export default withRouter(Navbar);