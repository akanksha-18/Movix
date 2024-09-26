import { useMovieContext } from '../context/MovieContext';
import Carousel from '../components/Carousel';
const Home = () => {
    const { trending, popular, topRated } = useMovieContext();

    return (
        <div className='px-32'>
            {trending && trending.length > 0 && (
                <Carousel title="Trending" movies={trending} />
            )}
            {popular && popular.length > 0 && (
                <Carousel title="Most Popular" movies={popular} />
            )}
            {topRated && topRated.length > 0 && (
                <Carousel title="Top Rated" movies={topRated} />
            )}
        </div>
    );
};
export default Home;