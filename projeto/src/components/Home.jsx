import foto from '../assets/images/imageHomeOK.png'
import{Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import{ Box,Button } from '@mui/material'

export function Home(){

    return(
        <>   
            <Card sx={{ maxWidth: 1280,mt:2 }}>
                <CardMedia
                    sx={{height: 550}}
                    image={foto}
                    title="Rosa Maria"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5"
                    component="div">
                    Rosa Maria
                    </Typography>
                    <Typography variant="body2"
                    color="text.secondary">
                    <strong>Vítima da Doença de Alzheimer em 01 de Junho de 2022.</strong>
                    </Typography>
                    <Typography variant="body2"
                    color="text.secondary">
                    <strong>
                    " Se me obrigassem a dizer por que o amava,
                    sinto que a minha única resposta seria: Porque era ele, Porque era eu."
                    - adaptado de Michel de Montaigne</strong>
                    </Typography>

                </CardContent>

            
                <Box sx={{display:'flex',justifyContent:'space-evenly'}}>   

                    <Button variant='outlined'mr={5}><Link to="/">Home</Link></Button>
                    <Button variant='outlined'><Link to="/register">Registro</Link></Button>
                    <Button variant='outlined'><Link to="/login">Entrar</Link></Button>
                    <Button variant='outlined'><Link to="/addimage">Adicionar Memórias</Link></Button>
                    <Button variant='outlined'><Link to="/play">Jogar</Link></Button>
                    <Button variant='outlined'><Link to="/resume">Suas Atividades</Link></Button>
                    <Button variant='outlined'><Link to="/play">Sair</Link></Button>

                </Box>  
                

            </Card>    
        </>

    )
}