import { useEffect, useState } from "react"
import { Navbar } from "../compnents/Navbar"
import axios from 'axios';

export const Authors = () => {
    const [authors, setauthors] = useState([]);
    async function getAuthors() {
        const options = {
            method: 'POST',
            url: 'https://quotel-quotes.p.rapidapi.com/authors/list',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
            },
            data: {
                pageSize: 25,
                page: 0,
                orderConfig: {
                    orderBy: 'alphabetical'
                }
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setauthors(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAuthors()
    }, []);
    return (
        <>
            <div className="author-navbar">
                <Navbar />
            </div>
            <div className="authors-card">
                {
                    authors.map(((value, index) => {
                        return (
                            <>
                                <div className="author-content" key={index}>
                                    <span className="quote"> Name : {value.name} </span>
                                    <span className="born-container">D.O.B : {value.born}</span>
                                    <span className="proffesion-container">Profession : {value.profession}</span>
                                    <span className="nationality-container"> Nationality :{value.nationality}</span>
                                </div>
                            </>
                        )
                    }))
                }


            </div>
        </>
    )
}