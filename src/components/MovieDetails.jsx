// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api'; // Ensure this path is correct

const MovieDetails = () => {
    const { id } = useParams(); // Get movie ID from the URL
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchDataFromApi(`/movie/${id}`); 
                setMovieDetails(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        getMovieDetails();
    }, [id]);

    if (!movieDetails) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
            <p><strong>Description:</strong> {movieDetails.overview}</p>
            <p><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Language:</strong> {movieDetails.original_language}</p>
            <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
            <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
        </div>
    );
};

export default MovieDetails;
