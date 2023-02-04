
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


export function AddImage (){

    const [cards,setCards] = useState([])

    const formik = useFormik({
        initialValues: {
       
          categoryPessoa: '',
          categoryFamilia: '',
          categoryLocal: '',
          categoryEvento: '',
          photo: '',
        },
        onSubmit: (values)=>{
            setCards([...cards,values])

            // console.log("cards",cards)
            // console.log("cardslen",cards.length)   
            // console.log("initial values",values)
            // console.log("initial valueslen",values.length)
           
        }
    })

    return(

        <>
            <Container>
         
       
                        <Typography variant="h2" component="div" mb={3}>
                        Adicione sua Foto
                        </Typography>
                            
                        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                       
                        <Grid container spacing={2}>
                          
                           
                                <Grid item xs={6}>    
                                <Paper elevation={3}>                     
                                <label>
                                    <Typography variant='h5'mb={2}> Categoria Pessoa
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
                                <Typography variant='h5'mb={2}> Categoria Família
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
                                <Typography variant='h5'mb={2}> Categoria Local
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
                                <Typography variant='h5'mb={2}> Categoria Evento
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
                
                            <Grid item xs={6}>
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2}> Escolha Sua Foto
                                </Typography>
                                </label>
                                <input
                                type='file'
                                name='photo'
                                accept='image/*'
                                onChange={(e) =>
                                    formik.setFieldValue('photo', e.currentTarget.files[0])
                                }
                                />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                            <Button variant='contained' type='submit'>Adicionar Foto</Button>
                            </Grid>
                           
                        </Grid>    
                        </form>
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
            
             
          
            {/* <p>values{formik.values.categoryPessoa}</p> */}
            { cards.map((memory,index)=> 
                       
                       (<>

                                <Grid item xs={6} mt={5}>
                                <Paper elevation={10}>
                                <img key={index}src={URL.createObjectURL(memory.photo)} style={{width:"100%"}}/>
                                </Paper>
                                </Grid>
                     
                        <p>index   ====  {index}</p>
                        <p>memoryPessoa  === {memory.categoryPessoa}</p>
                        <p>memoryFamilia  === {memory.categoryFamilia}</p>
                        <p>memoryPessoa  === {memory.categoryLocal}</p>
                        <p>memoryPessoa  === {memory.categoryEvento}</p>
                        <p>memoryPhoto  === {memory.photo.name}</p>
                
                       </>
                       ))}
             </Container>
         </>
    )
}

          