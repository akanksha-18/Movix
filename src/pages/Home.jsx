// import { useMovieContext } from '../context/MovieContext';
// import Carousel from '../components/Carousel';
// const Home = () => {
//     const { trending, popular, topRated } = useMovieContext();

//     return (
//         <div className='px-32'>
//             {trending && trending.length > 0 && (
//                 <Carousel title="Trending" movies={trending} />
//             )}
//             {popular && popular.length > 0 && (
//                 <Carousel title="Most Popular" movies={popular} />
//             )}
//             {topRated && topRated.length > 0 && (
//                 <Carousel title="Top Rated" movies={topRated} />
//             )}
//         </div>
//     );
// };
// export default Home;

import { useMovieContext } from '../context/MovieContext';
import Carousel from '../components/Carousel';
import { useState } from 'react';

const Home = () => {
    const { trending, popular, topRated } = useMovieContext();
    const [viewTrending, setViewTrending] = useState('Day');
    const [viewPopular, setViewPopular] = useState('movie');
    const [viewTopRated, setViewTopRated] = useState('movie');

    const filteredTrending = trending.filter(movie => {
        // Include movies without a 'view' property or those matching the selected view
        return !movie.view || movie.view === viewTrending.toLowerCase();
    });

    const filteredPopular = popular.filter(movie => {
        // Include movies without a 'media_type' property or those matching the selected media type
        return !movie.media_type || movie.media_type === viewPopular;
    });

    const filteredTopRated = topRated.filter(movie => {
        // Include movies without a 'media_type' property or those matching the selected media type
        return !movie.media_type || movie.media_type === viewTopRated;
    });

    return (
        <div className='px-32'>
            {filteredTrending.length > 0 && (
                <Carousel
                    title="Trending"
                    movies={filteredTrending}
                    view={viewTrending}
                    onToggleView={setViewTrending}
                    toggleOptions={['Day', 'Week']}
                />
            )}
            {filteredPopular.length > 0 && (
                <Carousel
                    title="Most Popular"
                    movies={filteredPopular}
                    view={viewPopular}
                    onToggleView={setViewPopular}
                    toggleOptions={['movie', 'tv']}
                />
            )}
            {filteredTopRated.length > 0 && (
                <Carousel
                    title="Top Rated"
                    movies={filteredTopRated}
                    view={viewTopRated}
                    onToggleView={setViewTopRated}
                    toggleOptions={['movie', 'tv']}
                />
            )}
        </div>
    );
};

export default Home;