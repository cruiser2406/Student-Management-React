import { NavLink } from "react-router-dom";

function Navbar(){
    return(
    <nav>
        <NavLink to='/'style={{marginLeft:'12px'}}>students</NavLink>
        <NavLink to='/enroll'style={{marginLeft:'12px'}}>enroll</NavLink>

       
    </nav>
    );
}
export default Navbar;