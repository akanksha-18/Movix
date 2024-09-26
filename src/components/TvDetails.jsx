import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';

const TvShowsDetails = () => {
    const { id } = useParams();
    const [TvDetails, setTvDetails] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchDataFromApi(`/tv/${id}`);
                console.log("TV",data);
                
                setTvDetails(data);
            } catch (error) {
                console.error('Error fetching tv details:', error);
            }
        };
        getMovieDetails();
    }, [id]);

    if (!TvDetails) return <div>Loading...</div>;

    const imageUrl = `https://image.tmdb.org/t/p/w500${TvDetails.poster_path}`;

    return (
        <div className="flex flex-col md:flex-row p-4 max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-lg">
            <img 
                src={imageUrl} 
                alt={TvDetails.title} 
                className="w-full md:w-1/3 h-auto rounded-l-lg object-cover"
            />
            <div className="p-6 flex-1">
                <h1 className="text-3xl font-bold mb-2">{TvDetails.title}</h1>
                <p className="text-gray-700 mb-4"><strong>Description:</strong> {TvDetails.overview}</p>
                <p className="text-gray-600 mb-2"><strong>Genres:</strong> {TvDetails.genres.map(genre => genre.name).join(', ')}</p>
                <p className="text-gray-600 mb-2"><strong>Language:</strong> {TvDetails.original_language}</p>
                <p className="text-gray-600 mb-2"><strong>Rating:</strong> {TvDetails.vote_average} / 10</p>
                <p className="text-gray-600"><strong>Release Date:</strong> {TvDetails.first_air_date}</p>
            </div>
        </div>
    );
};

export default TvShowsDetails;