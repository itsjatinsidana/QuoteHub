import { useNavigate } from "react-router-dom";
import { Navbar } from "../compnents/Navbar"


export const Collections = () => {
    const nav = useNavigate();
    const nav1 = useNavigate();
    const nav2 = useNavigate();
    const nav3 = useNavigate();
    const nav4 = useNavigate();
    return (
        <>
            <div classNameName="collection-nav" >
                <Navbar />
            </div>
            {/*motivational */}
            <div className="collection-container">
            <div className="moti-box-container">
                <div className="moti-content-container">
                    <span className="title">Motivational qoutes</span>
                    <button className="moti-btn" onFocus={() => { nav('/motivational') }}>click me</button>
                </div>
            </div>
            {/*love  */}
            <div className="moti-box-container">
                <div className="moti-content-container">
                    <span className="title">love qoutes</span>
                    <button className="moti-btn" onFocus={() => { nav1('/love') }}>click me</button>
                </div>
            </div>
            {/* funny*/}
            <div className="moti-box-container">
                <div className="moti-content-container">
                    <span className="title">funny qoutes</span>
                    <button className="moti-btn" onFocus={()=>{nav2('/funny')}}>click me</button>
                </div>
            </div>
            {/**succses */}
            <div className="moti-box-container">
                <div className="moti-content-container">
                    <span className="title">successs qoutes</span>
                    <button className="moti-btn" onFocus={()=>{nav3('/success')}}>click me</button>
                </div>
            </div>
            {/**friendship */}
            <div className="moti-box-container">
                <div className="moti-content-container">
                    <span className="title">friendship qoutes</span>
                    <button className="moti-btn" onFocus={()=>{nav4('/friendship')}}>click me</button>
                </div>
            </div>
            </div>
        </>
    )
}