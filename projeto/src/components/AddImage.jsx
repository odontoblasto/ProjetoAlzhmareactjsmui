import { useContext } from 'react';
import { useFormik,Field } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { Container} from '@mui/system';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {MemoryContext} from '../contexts/MemoryContext';




export function AddImage (){

    const {memo,setMemo} = useContext(MemoryContext)

    const {categoryPessoa}= memo

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
            // resetForm(values = '')
            
            setMemo([...memo,values])
            console.log("cards",cards)
            console.log("memo",memo)}        
    })

    // function getMemory(index){
    //     console.log("indexgetmemory",index)// }

    function handleDelete(e,photo,index){
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

                <Typography align='left' variant="h3" component="div" mb={3}pt={5}>
                Adicione sua Memória
                </Typography>
                 {/* <p>memo  === {memo.categoryPessoa}</p>
                        <p>memo  === {memo.categoryFamilia}</p>
                        <p>memo  === {memo.categoryLocal}</p>
                        <p>memo  === {memo.categoryEvento}</p>  */} 

                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                       
                        <Grid container spacing={2}>
                      

                            <Grid item xs={10}align="center">
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2} pl={5} pt={5} align='left'> 
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

                             {(formik.values.photo != "")?(<>
                            <Grid item xs={2}>
                                <Typography >
                                    Selecine os Detalhes dessa Memória
                                </Typography>   
                            </Grid>

                               <Grid item xs={5}>    
                                <Paper elevation={3}>                     
                                <label>
                                    <Typography variant='h5'mb={2}pl={5} pt={5} align='left'> 
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
                           
                        
                            <Grid item xs={5}>
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2}pl={5} pt={5} align='left'>
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

                            <Grid item xs={5}>
                                <Paper  elevation={3}>
                                <label>
                                <Typography variant='h5'mb={2}pl={5} pt={5} align='left'>
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

                            <Grid item xs={5}>
                                <Paper>
                                <label>
                                <Typography variant='h5'mb={2}pl={5} pt={5} align='left'>
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
                            </Grid></>):
                            (<Grid item xs={2}>
                                <Typography >
                                    Selecine a Foto dessa Memória
                                </Typography>   
                            </Grid>)}
   
                            
                            <Grid item xs={5} align="center">
                           {(formik.values.categoryPessoa 
                           ||formik.values.categoryFamilia || formik.values.categoryLocal || 
                           formik.values.categoryEvento)?(
                            <Button variant='contained'
                            type='submit 'color='success'>
                                <Typography variant='h6'>
                                Adicionar Foto
                                </Typography>
                            </Button>):(<p></p>)}
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
                                        {/* <Button variant='contained' color='error'
                                        onClick={(e)=>{handleDelete(e,memory.photo,index)}}>
                                        Remover ESSA Foto</Button>                                    */}

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
                                                        
                                    <Button on onClick={(e)=>handleDelete(e,memory.photo,index)}
                                    variant='contained'color='error'>
                                    Remover Memória</Button>
                                    </Paper>
                                </Grid>
                                </Grid>

                        {memo.map((memory,index)=> (
                        <>
                         <p>index   ====  {index}</p>
                        <p>memoryPessoa  === {memory.categoryPessoa}</p>
                       <p>memoryFamilia  === {memory.categoryFamilia}</p>
                        <p>memoryPessoa  === {memory.categoryLocal}</p>
                        <p>memoryPessoa  === {memory.categoryEvento}</p>
                        <img key={index}src={URL.createObjectURL(memory.photo)}
                                        alt="" style={{width:"100%",}}/>
                        
                      </> ))}
                
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
                                <Link to="/play">Jogar</Link>
                            </Grid>
                            <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/resume">Suas Atividades</Link>
                            </Grid>
                            {/* <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/profile">Profile</Link>
                            </Grid> */}
                            <Grid item xs={2}spacing={5} mr={5}>
                                <Link to="/play">Sair</Link>
                            </Grid>
                            </Box>
                       
             </Container>
         </>
    )
}

          