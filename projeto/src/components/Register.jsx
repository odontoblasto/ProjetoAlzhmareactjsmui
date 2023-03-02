import {Box,Button,Paper,Typography} from "@mui/material"
import { Link } from "react-router-dom"
import foto from '../assets/images/Logo.png'

export function Register (){

    return(
        <>      

        <Box sx={{display:'flex',justifyContent:'space-between',height:'550px'}}>
        
            <img src={foto} alt="" style={{width:'100%'}} />               
          
            <Paper elevation={3}  sx={{width:'45%',height:'450px',mt:'1.5rem'}}>
                <Typography variant="h3"mt={5}>
                    Registro
                </Typography>
                <Typography variant="h4"align="left">
                    Nome : 
                </Typography>
                <Typography variant="h4"align="left">
                    Senha : 
                </Typography>
                <Button variant="contained"> Registrar</Button>  
                <hr />
                <Typography variant="h3"mt={5}>
                    Entrar
                </Typography>
                <Typography variant="h4"align="left">
                    Nome : 
                </Typography>
                <Typography variant="h4"align="left">
                    Senha : 
                </Typography>
                <Button variant="contained"> Entrar</Button>
            </Paper>    
        </Box>

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