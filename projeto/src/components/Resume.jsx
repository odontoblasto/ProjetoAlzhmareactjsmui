import {Box,Button, Paper, Typography} from "@mui/material"
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function Resume (){

    return(
        <>
        <h1>Resumo de suas Atividades</h1>    

        <Box sx={{width:'100%',height:'550px'}}>
            <Paper elevation={3}sx={{width:'100%',height:'550px',mt:'1.2rem'}}>
                <Typography variant="h5">
                    Resumo de suas Atividades
                </Typography>
            </Paper>
        </Box>
        
        <Box sx={{display:'flex',justifyContent:'space-evenly',mt:'1rem'}}>   

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