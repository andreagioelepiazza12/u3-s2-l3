import TvSeries from "./TvSeries";

const TvSeriesContainer = () => {
    const queries = ['back to the future', 'toy story', 'rocky', 'Pirates of the Caribbean']; 
  
    return (
      <div>
        {queries.map((query, index) => (
          <TvSeries key={index} searchQuery={query} />
        ))}
      </div>
    );
  };
  
  export default TvSeriesContainer;