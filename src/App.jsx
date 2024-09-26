import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TVShows from './pages/TvShows';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Banner from './components/Banner';
import MovieDetails from './components/MovieDetails';
import TvShowsDetails from './components/TvDetails';
import MoviesWrapper from './components/MoviesWrapper';
import TvWrapper from './components/TvWrapper';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
        <MovieProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Banner />
                            <Home/>
                            <Footer/>
                        </>
                    } />
                    <Route path='/movies' element={<MoviesWrapper/>}>
                        <Route index element={<Movies />} />
                    </Route>
                    <Route path='/movie/:id' element={<MovieDetails />} />
                    <Route path='/tvshows' element={<TvWrapper/>}>
                        <Route index element={<TVShows />} />
                    </Route>
                    <Route path='/tv/:id' element={<TvShowsDetails/>}/> 
                </Routes>
            </Router>
        </MovieProvider>
        </div>
    );
};

export default App;