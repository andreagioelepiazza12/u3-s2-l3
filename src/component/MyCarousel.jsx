import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const MyCarousel = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funzione per fare la richiesta API
  const fetchMovies = async (query) => {
    const apiUrl = `http://www.omdbapi.com/?apikey=61aec85f&s=${query}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        console.error('No movies found');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // Effetto per caricare i dati all'inizializzazione del componente
  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery]);

  return (
    <Container fluid className="bg-dark text-white py-4">
      <h2 className="text-center mb-4">{searchQuery} Movies</h2>

      {loading ? (
        <div className="text-center text-white">Loading...</div> // Messaggio di caricamento
      ) : (
        <div className="image-carousel">
          {movies.map((movie, index) => (
            <div key={index} className="image-item">
              <img src={movie.Poster} alt={movie.Title} className="carousel-image" />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MyCarousel;