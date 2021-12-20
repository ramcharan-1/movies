import { createContext, useState } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props)=>{
    const [favourite, setFavourite] = useState([])

    return(
        <MovieContext.Provider value={[favourite, setFavourite]}>
            {props.children}
        </MovieContext.Provider>
    )
}

