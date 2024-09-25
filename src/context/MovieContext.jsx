import { createContext, useEffect, useState, useContext } from 'react';
import { fetchDataFromApi } from '../utils/api';  

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const getMovies = async () => {
        try {
            const trendingMovies = await fetchDataFromApi('/trending/movie/week');
            const popularMovies = await fetchDataFromApi('/movie/popular');
            const topRatedMovies = await fetchDataFromApi('/movie/top_rated');

            setTrending(trendingMovies.results);
            setPopular(popularMovies.results);
            setTopRated(topRatedMovies.results);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    const fetchByQuery = async (query) => {
        try {
            const movieResults = await fetchDataFromApi('/search/movie', { query });
            const tvResults = await fetchDataFromApi('/search/tv', { query });
            
            const combinedResults = [
                ...movieResults.results.map(movie => ({ ...movie, media_type: 'movie' })),
                ...tvResults.results.map(show => ({ ...show, media_type: 'tv' }))
            ];
            
            setSearchResults(combinedResults);
        } catch (error) {
            console.error('Error fetching by query:', error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ trending, popular, topRated, searchResults, fetchByQuery }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);