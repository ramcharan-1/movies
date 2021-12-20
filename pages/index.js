import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import MoviesCard from "../Components/common/MovieCard";
import { useApiRequest, searchMovies } from "../utilities";
import AutoComplete from "../Components/common/Autocomplete";
export default function Home({data}) {
  const [movies, setMovies] = useState([]);
  const searchMovie =async (text)=>{
    if(text.length>2){
      const movie = await searchMovies(text)
      setMovies(movie.data.results)
    }
  }
  return (
    <Container>
      <div style={{ marginTop: 20, marginBottom: 40 }}>
        <AutoComplete
          onChange={searchMovie}
          data={movies}
        />
      </div>

      <Grid container spacing={3}>
        {data && data.results && data.results.length > 0 ? (
          data.results &&
          data.results.map((movie) => {
            return (
              <Grid key={movie.id} item xs={12} sm={4} md={4}>
                <MoviesCard movie={movie} />
              </Grid>
            );
          })
        ) : (
          <Typography style={{ marginTop: 50 }}>No Movies found </Typography>
        )}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await (await useApiRequest("discover/movie"));
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

