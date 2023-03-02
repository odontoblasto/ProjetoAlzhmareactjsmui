import {Box,Button} from "@mui/material"
import { Link } from "react-router-dom"


export function Login (){

    return(
        <>
        <h1>Entrar no Site</h1>
        <h2> Under Construction </h2>
        
        <Box sx={{display:'flex',justifyContent:'space-evenly'}}>   

            <Button variant='outlined'mr={5}><Link to="/">Home</Link></Button>
            <Button variant='outlined'><Link to="/register">Registro</Link></Button>
            <Button variant='outlined'><Link to="/login">Entrar</Link></Button>
            <Button variant='outlined'><Link to="/addimage">Adicionar Memórias</Link></Button>
            <Button variant='outlined'><Link to="/play">Jogar</Link></Button>
            <Button variant='outlined'><Link to="/resume">Suas Atividades</Link></Button>
            <Button variant='outlined'><Link to="/play">Sair</Link></Button>

        </Box> 
 
                       
        </>
    )
}