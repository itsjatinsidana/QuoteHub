import axios from "axios";
import { Navbar } from "../compnents/Navbar";
import { useState,useEffect } from "react";
import Loader from "../compnents/Loader";
export const Success =() =>{
    const [success, setSuccess] = useState([]);
    const [page, setPage] = useState(1);
    const [loding, setLoading] = useState(true);
    async function getSuccess() {
        const options = {
            method: 'POST',
            url: 'https://quotel-quotes.p.rapidapi.com/topic',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
            },
            data: {
                pageSize: 6,
                page: page,
                topic: 'success'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            
            setSuccess(prev => [...prev, ...response.data])
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getSuccess();
    }, [page])
    function handleScroll() {

        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setLoading(true);
            setPage(prev => prev + 1)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <>
         <div className="collection-nav" >
                <Navbar />
            </div>
            <span className="motivate-container"> success qoutes</span>
            <div className="qoutes-card">
                
                {
                    success.map(((value, index) => {
                        return (
                            <>
                                <div className="card-content" key={index}>

                                    <blockquote className="quote">{value.quote}</blockquote>
                                    <p className="author">{value.name}</p>

                                </div>
                            </>
                        )
                    }))
                }

            </div>
            <Loader/>
        
        </>
    )
}