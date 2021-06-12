
import { Link } from "react-router-dom";
const Header =()=>{


return (
    <>
    <div className="header">
        <div className="header-right">
          <Link to="/todo"  href="#home">Todo</Link>
          <Link to="/" >List</Link>
        </div>
      </div>
   
    </>
    
)

}












export default Header;



