import { useContext,useState } from "react"

import {Grid,Box,Typography,Paper,FormControlLabel,FormControl
,FormLabel,RadioGroup,Radio} from "@mui/material"
import { Link } from "react-router-dom"

export function Play(){


    const [value, setValue] = useState('')

    function handleChangeRadio(e){
        console.log(e)
        
    }
  
 
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
         
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

    return(
        <>
            <Typography align='left' variant="h3" component="div" mb={3}pt={5}>
            Jogo da Memória
            </Typography> 

            <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    ml: 5,
                    mt:16, }}>

                <Grid container mt={5}>
                    <Grid item xs={12}mb={3} mr={5}>
                        <Paper elevation={10}>
                          Foto
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>

                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Memória</FormLabel>
                        <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                    
                        >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                      

                    </Grid>


                </Grid>

              





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
        </>
    )
}