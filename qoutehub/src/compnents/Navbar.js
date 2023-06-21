import {Link} from "react-router-dom";
import {  Nav } from 'react-bootstrap';
export const Navbar = () =>{
    return(
        <>
        <Nav>
            <div className="title-container">
              <Link to={'/'}>
              <span className="title">QouteHub</span>
              </Link>
            </div>
            <div className="list-items">
                <ul>
                <li className="list-items"><Link to={'/qoutes'}> Qoutes</Link></li>
                <li className="list-items"><Link to={'/collections'}>Collection</Link></li>
                <li className="list-items"><Link to={'/authors'}>Authors</Link></li>
                </ul>

            </div>

        </Nav>
        </>
    )
}