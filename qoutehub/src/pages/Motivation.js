import { Navbar } from "../compnents/Navbar";
import axios from 'axios';
import { useState, useEffect } from "react";
import Loader from "../compnents/Loader";
export const Motivation = () => {
    const [motivate, setmotivate] = useState([]);
    const [page, setPage] = useState(1);
    const [loding, setLoading] = useState(true);
    async function getMotivate() {
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
                topic: 'motivational'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            
            setmotivate(prev => [...prev, ...response.data])
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getMotivate();
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
    return (
        <>
            <div className="collection-nav" >
                <Navbar />
            </div>
            <div className="margin">
            <span className="motivate-container1"> motivational qoutes</span>
            </div>
            <div className="qoutes-card">

                {
                    motivate.map(((value, index) => {
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