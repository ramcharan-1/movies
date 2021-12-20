import { Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { getPoster } from "../../utilities";
import { MovieContext } from "../../Components/MovieContext";
import { useApiRequest } from "../../utilities";
const MovieDetail = () => {
  const [favourite, settFavourite] = useContext(MovieContext);
  const [added, setAdded] = useState(false);
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const movieId = router.query.movieId;
  useEffect(() => {
    if (movieId) {
      const getMovie = async()=>{
        const data =  await useApiRequest(`movie/${movieId}`)
        setMovie(data);
        const result =
            favourite.length > 0
              ? favourite.filter((fav) => fav.id === data.id)
              : false;
            if(result.length ===1){
              setAdded(true)
            }
      }
      getMovie()
    
    }
  }, [movieId]);
  if (!movieId || !movie) {
    return <h1>Loading</h1>;
  }

  const addToFav = (data) => {
    if (favourite.length > 0) {
      const result = favourite.filter((fav) => fav.id === data.id);
      if (result.length === 1) {
        setAdded(true);
      } else {
        settFavourite((prev) => [...prev, data]);
        setAdded(true);
      }
    } else {
      settFavourite((prev) => [...prev, data]);
      setAdded(true);
    }
  };
  const removeFav = (data) => {
    let filteredFav = favourite.filter((fav) => fav.id !== data.id);
    settFavourite(filteredFav);
    setAdded(false);
  };

  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={getPoster(movie.poster_path)} alt={movie.title} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Release Date: {movie.release_date}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Overview:{movie.overview}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Genres:
            {movie.genres.map((g) => {
              return <span> {g.name} </span>;
            })}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Runtime: {movie.runtime}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Spoken languages:
            {movie.spoken_languages.map((g) => {
              return <span> {g.english_name} </span>;
            })}
          </Typography>
          <div>
            <Button
              onClick={() => (added ? removeFav(movie) : addToFav(movie))}
            >
              {added ? "remove from favourite" : "Add to favourite"}
            </Button>
            <Button>Rent</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;
