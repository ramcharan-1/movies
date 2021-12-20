import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router'
import { getPoster } from '../../utilities';
export default function MoviesCard(props) {
    const router = useRouter();
    const getDetail = ()=>{
        router.push(`movie/${props.movie.id}`)
    }

  return (
    <Card >
      <CardMedia
        component="img"
        alt={props.movie.original_title}
        image={getPoster(props.movie.poster_path)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Release Date :  {props.movie.release_date}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={getDetail}>View Detail</Button>
      </CardActions>
    </Card>
  );
}
