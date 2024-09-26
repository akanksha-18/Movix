import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api'; 

const MovieDetails = () => {
    const { id } = useParams(); 
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

    const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

    return (
        <div className="flex flex-col md:flex-row p-4 max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-lg">
            <img 
                src={imageUrl} 
                alt={movieDetails.title} 
                className="w-full md:w-1/3 h-auto rounded-l-lg object-cover"
            />
            <div className="p-6 flex-1">
                <h1 className="text-3xl font-bold mb-2">{movieDetails.title}</h1>
                <p className="text-gray-700 mb-4"><strong>Description:</strong> {movieDetails.overview}</p>
                <p className="text-gray-600 mb-2"><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                <p className="text-gray-600 mb-2"><strong>Language:</strong> {movieDetails.original_language}</p>
                <p className="text-gray-600 mb-2"><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
                <p className="text-gray-600"><strong>Release Date:</strong> {movieDetails.release_date}</p>
            </div>
        </div>
    );
};

export default MovieDetails;