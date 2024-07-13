import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header(){
    return ( 

        <header className="header">
       <Link to={"/"}>
        <img src="/logoVert.jpg" alt="Logo" className="logo" /> 
       </Link>
       
      </header>

     );
}