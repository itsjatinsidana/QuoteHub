import { Link } from "react-router-dom"
import { Navbar } from "../compnents/Navbar"

export const Home = () => {
    return (
        <>
            <div className="navbar-container">
                <Navbar />
            </div>
            <div class="home-card">
                <span className="span1">Unlock the power of words at QuoteHub </span>
                
                <input className="search-field" type="text" placeholder="search here"/>
                <hr/>
                <button className="btn-clr"><Link to={'/qoutes'}> Explore Qoutes</Link></button>
                
            </div>

        </>
    )
}