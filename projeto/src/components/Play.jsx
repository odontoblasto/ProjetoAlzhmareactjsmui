import { useContext,useState } from "react"
import {MemoryContext} from '../contexts/MemoryContext';
import {Grid,Box,Typography,Paper,FormControlLabel,FormControl
,FormLabel,RadioGroup,Radio,Container,Button} from "@mui/material"
import { Link } from "react-router-dom"

export function Play(){

    const {memo} = useContext(MemoryContext)
    const [value, setValue] = useState('')

    function handleChangeRadio(e){
        console.log(e)
      
    }
  
     return(
        <>
         <Container> 
            <Typography align='left' variant="h3" component="div" mb={1}pt={1}>
            Teste Sua Memória
            </Typography> 

            {memo.map((memory,index)=> (
                <>
                    <Box sx={{}}>         
                    {/* <p>index   ====  {index}</p>
                    <p>memoryPessoa  === {memory.categoryPessoa}</p>
                    <p>memoryFamilia  === {memory.categoryFamilia}</p>
                    <p>memoryPessoa  === {memory.categoryLocal}</p>
                    <p>memoryPessoa  === {memory.categoryEvento}</p> */}
                    <Grid container mt={1} mb={5}>
                        <Grid item xs={12}>
                            <Paper elevation={10}>
                            <img key={index}src={URL.createObjectURL(memory.photo)}
                            alt="" style={{width:"100%"}}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper  elevation={3}>
                                <Typography variant='h5'mb={2}pl={5}ml={1} pt={1} align='left'>
                                Qual é o Nome dessa Pessoa ?
                                </Typography>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">
                                        <strong>Memória Pessoa</strong></FormLabel>
                                        <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}                                   
                                        >
                                        <FormControlLabel value={memory.categoryPessoa} control={<Radio />}
                                        label={memory.categoryPessoa} />
                                        <FormControlLabel value="Carlos" control={<Radio />} label="Carlos" />
                                        <FormControlLabel value="Sabrina" control={<Radio />} label="Sabrina" />
                                        </RadioGroup>
                                </FormControl>
                            </Paper>
                            <Paper>
                            <Typography variant='h5'mb={2}pl={5}ml={1} pt={1} align='left'>
                                Qual seu Parentesco com ela ?
                                </Typography>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Memória Família</FormLabel>
                                        <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}                                    
                                        >
                                        <FormControlLabel value="Pai" control={<Radio />} label="Pai" />
                                        <FormControlLabel value="Mãe" control={<Radio />} label="Mãe" />
                                        </RadioGroup>
                                </FormControl>
                            </Paper>
                            <Paper>
                            <Typography variant='h5'mb={2}pl={5}ml={1} pt={1} align='left'>
                                Onde fica esse Local ?
                                </Typography>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Memória Local</FormLabel>
                                        <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}                                    
                                        >
                                        <FormControlLabel value="Recife" control={<Radio />} label="Recife" />
                                        <FormControlLabel value="São Paulo" control={<Radio />} label="São Paulo" />
                                        </RadioGroup>
                                </FormControl>
                            </Paper>
                            <Paper>
                            <Typography variant='h5'mb={2}pl={5}ml={1} pt={1} align='left'>
                                Qual é esse Evento ?
                                </Typography>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Memória Evento</FormLabel>
                                        <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}                                    
                                        >
                                        <FormControlLabel value="Casamento" control={<Radio />} label="Casamento" />
                                        <FormControlLabel value="Nascimento" control={<Radio />} label="Nascimento" />
                                        </RadioGroup>
                                </FormControl>
                            </Paper>


                          
                        </Grid>
                    </Grid>
                    </Box>                
                </>                                             
                          
                ))}        
        
            <Box sx={{display:'flex',justifyContent:'space-evenly'}}>   
               
                <Button variant='outlined'mr={5}><Link to="/">Home</Link></Button>
                <Button variant='outlined'><Link to="/register">Registro</Link></Button>
                <Button variant='outlined'><Link to="/login">Entrar</Link></Button>
                <Button variant='outlined'><Link to="/addimage">AddImage</Link></Button>
                <Button variant='outlined'><Link to="/resume">Suas Atividades</Link></Button>
            
            </Box>  
         </Container> 
        </>
    )
}