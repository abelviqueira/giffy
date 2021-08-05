import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Dragon Ball', 'Star wars', 'Marvel', 'Justice League'];

export default function Home () {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const handleSubmit = evt => {
        evt.preventDefault();
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`);
    }
    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar gif..." onChange={handleChange} value={keyword}></input>
            </form>    
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => {
                    return <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}