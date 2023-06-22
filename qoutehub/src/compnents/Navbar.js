import { Link } from "react-router-dom";
export const Navbar = () => {
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
                    </ul>

                </div>

            </nav>
        </>
    )
}