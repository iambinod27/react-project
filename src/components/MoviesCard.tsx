import { FC } from "react";

interface Movie {
  primaryImage: {
    url?: string;
  };

  originalTitleText: {
    text?: string;
  };

  releaseDate: {
    year?: number;
  };
  id: string;
}

interface movieProps {
  movie: Movie;
}

const MoviesCard: FC<movieProps> = ({ movie }) => {
  return (
    <div className="p-5 drop-shadow-lg border">
      <div>
        {/* <img src={movie.primaryImage.url} alt={movie.originalTitleText.text} /> */}
      </div>
      <h3>{movie.originalTitleText.text}</h3>
      <p>{movie.releaseDate.year}</p>
    </div>
  );
};
export default MoviesCard;
