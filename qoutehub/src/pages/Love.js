import axios from "axios";
import { useEffect,useState } from "react";
import { Navbar } from "../compnents/Navbar";
export const Love = () =>{
    const [love, setlove] = useState([]);
    async function getLove() {
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
                topic: 'love'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setlove(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getLove();
    }, [])
    return(
        <>
         <div className="collection-nav" >
                <Navbar />
            </div>
            <span className="motivate-container"> love qoutes</span>
            <div className="qoutes-card">
                
                {
                    love.map(((value, index) => {
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