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
            <div className="collection-nav" >
                <Navbar />
            </div>
            {/*motivational */}
            <div className="collection-container">
            <div class="moti-box-container">
                <div className="moti-content-container">
                    <span class="title">Motivational qoutes</span>
                    <button className="moti-btn" onFocus={() => { nav('/motivational') }}>click me</button>
                </div>
            </div>
            {/*love  */}
            <div class="moti-box-container">
                <div className="moti-content-container">
                    <span class="title">love qoutes</span>
                    <button className="moti-btn" onFocus={() => { nav1('/love') }}>click me</button>
                </div>
            </div>
            {/* funny*/}
            <div class="moti-box-container">
                <div className="moti-content-container">
                    <span class="title">funny qoutes</span>
                    <button className="moti-btn" onFocus={()=>{nav2('/funny')}}>click me</button>
                </div>
            </div>
            {/**succses */}
            <div class="moti-box-container">
                <div className="moti-content-container">
                    <span class="title">successs qoutes</span>
                    <button className="moti-btn" onFocus={()=>{nav3('/success')}}>click me</button>
                </div>
            </div>
            {/**friendship */}
            <div class="moti-box-container">
                <div className="moti-content-container">
                    <span class="title">friendship qoutes</span>
                    <button className="moti-btn" onFocus={()=>{nav4('/friendship')}}>click me</button>
                </div>
            </div>
            </div>
        </>
    )
}