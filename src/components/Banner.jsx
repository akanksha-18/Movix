import  { useEffect, useState } from 'react';
import { useMovieContext } from '../context/MovieContext';
import Card from './Card'; 

const Banner = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const { fetchByQuery, searchResults } = useMovieContext();
    
    const images = [
        'https://image.tmdb.org/t/p/w500/path_to_your_image1.jpg',
        'https://image.tmdb.org/t/p/w500/path_to_your_image2.jpg',
        'https://image.tmdb.org/t/p/w500/path_to_your_image3.jpg',
    ];

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            fetchByQuery(searchQuery);
        }
    };

    return (
        <div 
            className="min-h-64 flex flex-col items-center justify-center bg-cover bg-center p-4"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-lg text-center mb-4">
                <h1 className="text-3xl font-bold mb-4">Discover Movies and TV Shows</h1>
                <form onSubmit={handleSearch} className="flex items-center">
                    <input 
                        type="text"
                        placeholder="Search for a movie or TV show..."
                        className="px-4 py-2 rounded-full shadow-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full">Search</button>
                </form>
            </div>
            {/* Display search results */}
            {searchResults.length > 0 && (
                <div className="w-full bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Search Results:</h2>
                    <div className="flex overflow-x-auto space-x-4 pb-4">
                        {searchResults.map(item => (
                            <div className="flex-none w-48" key={item.id}>
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;