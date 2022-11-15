import React,{useContext} from "react";
import ThemeContext from "../Context";

import { Link } from "react-router-dom";
const Navbar=()=>{
    // const [isLight, setIsLight] = useState(true)

    const {isLight,changeTheme} =useContext(ThemeContext)



    return(
        <div>
            <div> Geekster </div>
            <Link to="/">Home</Link> <br/>
            <Link to="/contact">Contact</Link> <br/>
            <Link to="/service">Service</Link>
            <br/>
            <button onClick={()=>{changeTheme()}}>Toggle Theme to {isLight?"true":"False"}</button>

        </div>

    )
}

export default Navbar;