import { Navbar } from "../compnents/Navbar";
import axios from 'axios';
import { useState, useEffect } from "react";
export const Motivation = () =>{
    const [motivate, setmotivate] = useState([]);
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
                pageSize: 2,
                page: 10,
                topic: 'motivational'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setmotivate(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getMotivate();
    }, [])
    return(
        <>
         <div className="collection-nav" >
                <Navbar />
            </div>
            <span className="motivate-container"> motivational qoutes</span>
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
        
        </>
    )
}