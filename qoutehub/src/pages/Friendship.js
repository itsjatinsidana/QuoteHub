import axios from "axios";
import { Navbar } from "../compnents/Navbar";
import { useState,useEffect } from "react";
export const Friendship =() =>{
    const [friend, setFriend] = useState([]);
    async function getFriend() {
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
                topic: 'friendship'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setFriend(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getFriend();
    }, [])
    return(
        <>
         <div className="collection-nav" >
                <Navbar />
            </div>
            <span className="motivate-container"> friendship qoutes</span>
            <div className="qoutes-card">
                
                {
                    friend.map(((value, index) => {
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