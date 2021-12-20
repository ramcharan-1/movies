import { useContext } from "react";
import { MovieContext } from "../../Components/MovieContext";
import { Container, Grid, Typography } from "@mui/material";
import MoviesCard from "../../Components/common/MovieCard";
const Favourite = props=>{
    const [favourite, settFavourite] = useContext(MovieContext);
    return(
       <Container>
           <Grid sx={{marginTop:7, textAlign:'center', marginBottom:3}}>
                <Typography sx={{fontSize:30}} >Favourite Movies</Typography>
           </Grid>
             <Grid container spacing={3}>
                {favourite.length > 0 ? (
               favourite.map((movie) => {
                    return (
                    <Grid key={movie.id} item xs={12} sm={4} md={4}>
                        <MoviesCard movie={movie} />
                    </Grid>
                    );
                })
                ) : (
                <Typography style={{ marginTop: 50 }}>No Favourite Movies Added  </Typography>
                )}
            </Grid>
       </Container>
    )
}

export default Favourite;