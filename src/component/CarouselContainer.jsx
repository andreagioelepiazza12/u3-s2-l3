
import MyCarousel from './MyCarousel'; // Importa il componente MyCarousel

const CarouselContainer = () => {
  const queries = ['Batman', 'Spider-Man', 'Avengers', 'Star Wars']; 

  return (
    <div>
      {queries.map((query, index) => (
        <MyCarousel key={index} searchQuery={query} />
      ))}
    </div>
  );
};

export default CarouselContainer;