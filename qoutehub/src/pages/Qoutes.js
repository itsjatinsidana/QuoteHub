import { useEffect, useState } from "react";
import { Navbar } from "../compnents/Navbar";
import axios from 'axios';

export const Qoutes = () => {
    const [qoute, setQoute] = useState([]);
    async function getQoutes() {


        const options = {
            method: 'POST',
            url: 'https://quotel-quotes.p.rapidapi.com/quotes/list',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
            },
            data: {
                pageSize: 150,
                page: 0
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setQoute(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getQoutes()
    }, [])
    return (
        <>
            <div className="qoutes-nav">
                <Navbar />
            </div>
            <div className="qoutes-card">
                {
                    qoute.map(((value, index) => {
                        return (
                            <>
                                <div className="card-content" key={index}>
                                    <blockquote className="quote">{value.quote}</blockquote>
                                    <p className="author"> {value.name}</p>
                                </div>
                            </>
                        )
                    }))
                }





            </div >
        </>
    )
}