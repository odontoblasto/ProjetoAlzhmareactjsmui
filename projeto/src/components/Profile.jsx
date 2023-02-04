
import Logo from '../assets/images/Logo.png'
import{Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';


export function Profile (){
   

    return(

        <>
        <Container>
            <Typography gutterBottom variant="h3" component="div">
            Seu Perfil
            </Typography>
            <Grid container>
                <Grid item xs={8}mb={3} mr={1}>
                    <Paper elevation={10}>
                      <img src={Logo} alt="" style={{width:"600px", border:'1px solid red'}}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3}>
                        <Paper elevation={5}>
                         <Typography variant='h5'>
                            Detalhes da Foto
                        </Typography>
                        <Typography variant='subtitle2'>
                            Categoria Pessoa
                        </Typography> 
                        <Typography variant='subtitle2'>
                            Categoria Família
                        </Typography> 
                        <Typography variant='subtitle2'>
                            Categoria Local
                        </Typography> 
                        <Typography variant='subtitle2'>
                            Categoria Evento
                        </Typography> 
                        </Paper>
                                        
                      <Button variant='contained'>Alterar Foto</Button>
                    </Paper>
                </Grid>
            
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Paper elevation={10}>
                        <Typography variant='h5'>                            
                        Sua Galeria de Fotos
                        </Typography>
                        <Grid item xs={2}>
                            <Paper elevation={3}>
                                Foto
                            </Paper>
                           
                        </Grid>
                        {/* <img src={foto} alt="" style={{width:"150px", border:'1px solid red'}}/> */}
                        {/* <img src={foto} alt="" style={{width:"150px", border:'1px solid red'}}/> */}
                    </Paper>

                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={2}spacing={2}>
                    <Link to="/">Home</Link>
                </Grid> 
                <Grid item xs={2}spacing={2}>
                    <Link to="/register">Registro</Link>
                </Grid>
                <Grid item xs={2}spacing={2}>
                    <Link to="/login">Entrar</Link>
                </Grid>
                <Grid item xs={2}spacing={2}>
                    <Link to="/profile">Profile</Link>
                </Grid>
                <Grid item xs={2}spacing={2}>
                    <Link to="/addimage">AddImage</Link>
                </Grid>
            </Grid>
                       
            </Container>
        </>
    )
}