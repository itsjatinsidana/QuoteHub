import { Navbar } from "../compnents/Navbar";
import { useEffect,useState } from "react";
import axios from "axios";
export const Funny =() =>{
    const [funny, setFunny] = useState([]);
    async function getFunny() {
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
                topic: 'funny'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setFunny(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getFunny();
    }, [])
    return(
        <>
         <div className="collection-nav" >
                <Navbar />
            </div>
            <span className="motivate-container"> Funny qoutes</span>
            <div className="qoutes-card">
                
                {
                    funny.map(((value, index) => {
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