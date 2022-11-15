import { useContext } from "react";
import Navbar from "./Navbar";
import ThemeContext from '../Context';
const Contact=()=>{
    const {isLight} = useContext(ThemeContext);

    return(
        <>
        <div className={isLight === true?'light':'dark'}>
           <Navbar />
          <h2>Hey here Is my whatsapp no:- +92 76576743900 </h2>
          </div>
        </>
    )
}
export default Contact;