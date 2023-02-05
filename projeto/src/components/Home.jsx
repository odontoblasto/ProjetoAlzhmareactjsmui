import styles from './Home.module.css'

import foto from '../assets/images/imageHomeOK.png'
import{Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';



export function Home(){

    return(
        <>        
  
            <Card sx={{ maxWidth: 1280 }}>
                <CardMedia
                    sx={{height: 550}}
                    image={foto}
                    title="Rosa Maria"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Rosa Maria
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Vítima da Doença de Alzheimer em 01 de Junho de 2022.</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <strong>
                    " Se me obrigassem a dizer por que o amava, sinto que a minha única resposta seria: Porque era ele, Porque era eu."
                    - adaptado de Michel de Montaigne</strong>
                    </Typography>
                </CardContent>
                <CardActions>

                    <Link to="/">Home</Link>
                    <Link to="/register">Registro</Link>
                    <Link to="/login">Entrar</Link>
                    {/* <Link to="/profile">Profile</Link> */}
                    <Link to="/addimage">AddImage</Link>
                           
                </CardActions>
            </Card>
    
        </>

    )
}