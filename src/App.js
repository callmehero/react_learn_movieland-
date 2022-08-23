import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
// dc18b912

const API_URL = 'http://www.omdbapi.com/?apikey=dc18b912'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTeam] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    };

    useEffect(()=>{
        searchMovies('spiderman')
    }, []);

    return (
       <div className='app'>
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for moviews" 
                    value={searchTerm} 
                    onChange={(e)=>setSearchTeam(e.target.value)}/>
                <img src={SearchIcon} 
                alt="search" 
                onClick={() => searchMovies(searchTerm)}></img>
            </div>
            {
                movies?.length > 0 ? 
                (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
       </div>
    );
}

export default App;