import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Banner from './components/Banner';
import MoviesAndTVShows from './components/MoviesAndTVshows';

const App = () => {
    return (
        <MovieProvider>
            <Router>
                <Navbar />
                <Banner/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/tvshows" element={<TVShows />} />
                </Routes>
            </Router>
            {/* <MoviesAndTVShows/> */}
        </MovieProvider>
    
    );
};

export default App;
