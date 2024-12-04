import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './component/Topbar';
import Footer from './component/Footer';
import Hero from './component/Hero';
import CarouselContainer from './component/CarouselContainer';
import MovieDetails from './component/MovieDetails';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TvSeriesContainer from './component/TvSeriesContainer';

function App() {
 

  return (
    <BrowserRouter>
      <Topbar />
      <Hero />
      <Routes>
    
        <Route path="/" element={<CarouselContainer/>}></Route>
        <Route path="/details/:id" element={<MovieDetails/>}></Route>
        <Route path="/tvSeries" element = {<TvSeriesContainer />}></Route>
      
      </Routes>
      

      <Footer />
    </BrowserRouter>
  )
}

export default App
