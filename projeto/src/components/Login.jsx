import {Grid,Box} from "@mui/material"
import { Link } from "react-router-dom"


export function Login (){

    return(
        <>
        <h2> Under Construction </h2>
        <Box       sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                typography: 'body1',
                                 ml: 5,
                                 mt:16,
                               
                            }}>
                            <Grid item xs={2}spacing={5}mr={5}>
                                <Link to="/">Home</Link>
                            </Grid> 
                            <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/register">Registro</Link>
                            </Grid>
                            <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/login">Entrar</Link>
                            </Grid>
                            {/* <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/profile">Profile</Link>
                            </Grid> */}
                            <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/addimage">AddImage</Link>
                            </Grid>
                            </Box>
                       
        </>
    )
}