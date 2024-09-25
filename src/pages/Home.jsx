import { useMovieContext } from '../context/MovieContext';
import Carousel from '../components/Carousel';

const Home = () => {
    const { trending, popular, topRated } = useMovieContext();

    return (
        <div>
            <Carousel title="Trending" movies={trending} />
            <Carousel title="Most Popular" movies={popular} />
            <Carousel title="Top Rated" movies={topRated} />
        </div>
    );
};

export default Home;
