/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api';

const Dropdown = ({ handleGenreChange, handleSortChange }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genreResponse = await fetchDataFromApi('/genre/movie/list');
            setGenres(genreResponse.genres);
        };
        fetchGenres();
    }, []);

    return (
        <div className="flex justify-between mb-4">
            {/* Genre Dropdown */}
            <div>
                <label htmlFor="genre" className="mr-2">Genre: </label>
                <select
                    id="genre"
                    onChange={(e) => handleGenreChange(e.target.value)}
                    className="p-2 rounded border"
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sort Dropdown */}
            <div>
                <label htmlFor="sort" className="mr-2">Sort By: </label>
                <select
                    id="sort"
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="p-2 rounded border"
                >
                    <option value="popularity.desc">Most Popular</option>
                    <option value="popularity.asc">Least Popular</option>
                    <option value="vote_average.desc">Highest Rated</option>
                    <option value="vote_average.asc">Lowest Rated</option>
                </select>
            </div>
        </div>
    );
};

export default Dropdown;
