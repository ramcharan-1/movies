import * as React from "react";
import {
  TextField,
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/router";
import { getPoster } from "../../utilities";
import Link from "next/link";
export default function AutoComplete(props) {
  const router = useRouter();
  const getText = (e) => {
    props.onChange(e.target.value);
  };
  

  const optionComponent = (option) => {
    return (
      <Link href={`/movie/${option.id}`}>
        <a>
          {" "}
          <Card style={{ margin: 5, marginTop:20 }}>
            <CardMedia
              component="img"
              sx={{ width: 151, height:151 }}
              image={getPoster(option.poster_path)}
              alt={option.title}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography >
                  {option.title}
                </Typography> 
              </CardContent>
            </Box>
          </Card>
        </a>
      </Link>
    );
  };
  return (
    <Autocomplete
      freeSolo
      id="auto-complete-demo"
      getOptionLabel={(option) => option.title || ""}
      options={props.data ? props.data : []}
      renderOption={(event, option) => {
        return optionComponent(option);
      }}
      renderInput={(params) => (
        <TextField
          onChange={(e) => getText(e)}
          {...params}
          label="Enter first three charactor of movie"
        />
      )}
    />
  );
}
