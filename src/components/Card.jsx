/* eslint-disable react/prop-types */
import { useState } from 'react';

const CircularProgressBar = ({ rating }) => {
    const normalizedRating = Math.min(Math.max(rating, 0), 10); // Ensure rating is between 0 and 10
    const percentage = (normalizedRating / 10) * 100;
    const strokeDasharray = 2 * Math.PI * 18; // 2πr where r=18 (radius of our circle)
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
        <div className="relative w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 40 40">
                <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth="4"
                />
                <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 20 20)"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">{normalizedRating.toFixed(1)}</span>
            </div>
        </div>
    );
};

const Card = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750.png?text=No+Image';

    return (
        <div 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img
                    className="object-cover w-full h-96"
                    src={imageUrl}
                    alt={movie.title || movie.name}
                />
                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                        <p className="text-white text-center px-4">
                            {movie.overview.length > 150
                                ? `${movie.overview.substring(0, 150)}...`
                                : movie.overview}
                        </p>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800 truncate">
                    {movie.title || movie.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                    {new Date(movie.release_date || movie.first_air_date).getFullYear() || 'N/A'}
                </p>
                <div className="flex items-center justify-between">
                    <CircularProgressBar rating={movie.vote_average} />
                    <span className="text-sm text-gray-500">
                        {movie.media_type === 'movie' ? 'Movie' : 'TV Show'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;