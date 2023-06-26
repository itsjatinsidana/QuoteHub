import { Navbar } from "../compnents/Navbar";
import axios from 'axios';
import { useState } from "react";
export const Search = () => {
    const [search, setSearch] = useState([]);
    const [term, setTerm] = useState("");
    const [check, setCheck] = useState(false);
    const [current, setCurrent] = useState("");

    async function getSearch() {


        const options = {
            method: 'POST',
            url: `https://quotel-quotes.p.rapidapi.com/search/${term}`,
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
            },
            data: {
                pageSize: 25,
                page: 0,
                searchString:  {term}
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setSearch(response.data);
            setCheck(true);
            setCurrent(term);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className="search-navbar">
                <Navbar />

            </div>
            <div className="search-container">
                <form className="search-form">
                    <input type="text" placeholder="search here.." className="search-here" onChange={(e) => setTerm(e.target.value)}></input>
                    <button className='btn-clr' type="button" onClick={getSearch}>Search</button>
                </form>
                <div className='results-container'>
                    <div className='result-header'>
                        {
                            search.length === 0 && check &&
                            <span>no results found</span>
                        }
                        {
                            search.length !== 0 && check &&
                            <span>{search.length} results found for "{current}"</span>
                        }
                    </div>
                    <div className='result-content'>
                        <div className="qoutes-card">
                            {
                                search.map(((value, index) => {
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
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}