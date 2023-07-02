import {Link, useNavigate} from "react-router-dom"
import {Navbar} from "../compnents/Navbar"
import {Footer} from "../compnents/Footer";


export const Home = () => {
    const nav = useNavigate();  //to navigate from 1 page to another
    return (
        <>
            <div className="navbar-container">
                <Navbar/>
            </div>
            <div className="home-card">
                <span className="span1">Unlock the power of words at QuoteHub </span>
                <input className="search-field" type="text" placeholder="Search here.." onFocus={() => {
                    nav("/search")
                }}/>{/*use here in onfocus with router link */}
                <button className="btn-clr"><Link to={'/qoutes'}> Explore Qoutes</Link></button>
            </div>
            <div className="home-footer">
                <Footer/>
            </div>
        </>
    )
}