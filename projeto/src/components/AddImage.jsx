
import { useFormik,Field } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardContext from '../contexts/CardContext';
import { useContext } from 'react';


export function AddImage (){

    const {memo} = useContext(CardContext)


    const [cards,setCards] = useState([])

    const formik = useFormik({
        initialValues: {
          categoryPessoa: '',
          categoryFamilia: '',
          categoryLocal: '',
          categoryEvento: '',
          photo: '',
        },
        onSubmit: (values,{resetForm})=>{
            setCards([...cards,values])
        resetForm(values = '')}        
    })


    function getMemory(index){
        console.log("indexgetmemory",index)
      
       
       
    }
    function handleDelete(photo){
        // console.log("memory.photo",memory)
        // console.log(cards)
        // console.log("cardslen",cards.length) 
        setCards(cards.filter((element)=> element.photo != photo))
        // console.log("cards2",cards)
        // console.log(cards.length)
    }

    return(

        <>
            <Container>         
       
                        <Typography align='left' variant="h2" component="div" mb={3}>
                        Adicione sua Foto
                        </Typography>                            
                        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                       
                        <Grid container spacing={2}>

                        <Grid item xs={12}align="center">
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2} align='left'> 
                                Escolha Sua Foto
                                </Typography>
                                </label>
                                <input
                                type='file'
                                name='photo'
                                accept='image/*'
                                onChange={(e) =>
                                formik.setFieldValue
                                ('photo', e.currentTarget.files[0])}/>
                                </Paper>
                            </Grid>
                            
                               <Grid item xs={6}>    
                                <Paper elevation={3}>                     
                                <label>
                                    <Typography variant='h5'mb={2} align='left'> 
                                    Categoria Pessoa
                                    </Typography>
                                </label>
                                    <input
                                    type='text'
                                    name='categoryPessoa'
                                    onChange={formik.handleChange}
                                    value={formik.values.categoryPessoa}
                                    component={TextField}
                                    />
                                     </Paper>
                                </Grid>
                           
                        
                            <Grid item xs={6}>
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2} align='left'>
                                 Categoria Família
                                </Typography>
                                </label>
                                <input
                                type='text'
                                name='categoryFamilia'
                                onChange={formik.handleChange}
                                value={formik.values.categoryFamilia}
                                />
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2} align='left'>
                                 Categoria Local
                                </Typography>
                                </label>
                                <input
                                type='text'
                                name='categoryLocal'
                                onChange={formik.handleChange}
                                value={formik.values.categoryLocal}
                                />
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper>
                                <label>
                                <Typography variant='h5'mb={2} align='left'>
                                Categoria Evento
                                </Typography>
                                </label>
                                <input
                                type='text'
                                name='categoryEvento'
                                onChange={formik.handleChange}
                                value={formik.values.categoryEvento}
                                />
                                </Paper>
                            </Grid>
                
                    
                            
                            <Grid item xs={5} align="center">
                           {(formik.values.photo != "")?(
                            <Button variant='contained'
                            type='submit 'color='success'>
                            Adicionar Foto</Button>):(<p> SEM FOTO</p>)}
                            </Grid>
                                                     
                        </Grid>    
                        </form>   
            
            {cards.map((memory,index)=> 
                       
                       (<>                        
                                <Grid container mt={5}>
                                <Grid item xs={7}mb={3} mr={5}>
                                    <Paper elevation={10}>
                                        <img key={index}src={URL.createObjectURL(memory.photo)}
                                        alt="" style={{width:"100%",}}/>
                                        <Button variant='contained' color='error'
                                        onClick={()=>{handleDelete(memory.photo,index)}}>
                                        Remover ESSA Foto</Button>                                   

                                    </Paper>

                                </Grid>
                                <Grid item xs={4}>
                                    <Paper elevation={3}>
                                        <Paper elevation={5}>
                                        <Typography variant='h4'pt={3}>
                                            Detalhes da Foto
                                        </Typography>
                                        <Typography variant='h6'mt={3}>
                                            Categoria Pessoa :
                                        <Typography variant='subtitle1'>
                                            {memory.categoryPessoa}
                                        </Typography>
                                        </Typography> 
                                        <Typography variant='h6'mt={3}>
                                            Categoria Família :
                                        <Typography variant='subtitle1'>
                                            {memory.categoryFamilia}
                                        </Typography>
                                        </Typography> 
                                        <Typography variant='h6'mt={3}>
                                            Categoria Local :
                                        <Typography variant='subtitle1'>
                                            {memory.categoryLocal}
                                        </Typography>
                                        </Typography> 
                                        <Typography variant='h6'mt={3}>
                                            Categoria Evento :
                                        <Typography variant='subtitle1'>
                                            {memory.categoryEvento}
                                        </Typography>
                                        </Typography> 
                                        </Paper>
                                                        
                                    <Button variant='contained'color='error'>Alterar Detalhes da Foto</Button>
                                    </Paper>
                                </Grid>
                                </Grid>
                     
                        {/* <p>index   ====  {index}</p>
                        <p>memoryPessoa  === {memory.categoryPessoa}</p>
                        <p>memoryFamilia  === {memory.categoryFamilia}</p>
                        <p>memoryPessoa  === {memory.categoryLocal}</p>
                        <p>memoryPessoa  === {memory.categoryEvento}</p>
                        <p>memoryPhoto  === {memory.photo.name}</p>
                        <p>memo  === {memo.categoryPessoa}</p>
                        <p>memo  === {memo.categoryFamilia}</p>
                        <p>memo  === {memo.categoryLocal}</p>
                        <p>memo  === {memo.categoryEvento}</p> */}
                
                        </>))}

                       
                            <Box sx={{
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
                       
             </Container>
         </>
    )
}

          