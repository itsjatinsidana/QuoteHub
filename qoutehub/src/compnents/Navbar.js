import {Link} from "react-router-dom";

export const Navbar = () => {

    function openMenu() {
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.add("active");
    }

    function closeMenu() {
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("active");
    }

    return (
        <>
            <nav>
                <div className="title-container">
                    <Link to={'/'}>
                        <span className="title">QouteHub</span>
                    </Link>
                </div>
                <div className="list-items">
                    <ul>
                        <li className="list-item"><Link to={'/qoutes'}> Qoutes</Link></li>
                        <li className="list-item"><Link to={'/collections'}>Collection</Link></li>
                        <li className="list-item"><Link to={'/authors'}>Authors</Link></li>
                     {/*   <li className="ham-icon" onClick={openMenu}><i className="fa-solid fa-bars"></i></li> */} 
                    </ul>

                </div>
            </nav>
            {/* 
            <aside id="sidebar">
                <button className="menu__close" onClick={closeMenu}><i className="fa-solid fa-xmark"></i></button>
                <div className="sidebar__menu">
                    <ul className="menu__list">
                        <li className="menu-items"><Link to={'/'}>Home</Link></li>
                        <li className="menu-items"><Link to={'qoutes'}> Qoutes</Link></li>

                        <li className="menu-items"><Link to={'/collections'}>collections</Link></li>
                        <li className="menu-item"><Link to={'/authors'}>Authors</Link></li>
                    </ul>
                </div>
            </aside>
            */}
        </>
    )
}