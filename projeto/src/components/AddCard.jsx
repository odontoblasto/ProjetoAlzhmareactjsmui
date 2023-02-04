import { Card, CardContent, Container, ImageList,ImageListItem} from '@mui/material'
import {Form, Formik,Field,FieldArray,useFormik} from 'formik'
import { useEffect,useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

export function AddCard(){

  const [images,setImages] = useState([])
  const [imagesURLS,setImagesURLS] = useState([])
  const [categoryDetail,setCategoryDetail] = useState([])
  const [cards,setCards] = useState([])

  useEffect(()=>{
    if (images.length<1) return
    const newImageurls = []
    images.forEach(image => newImageurls.push(URL.createObjectURL(image)))
    setImagesURLS([...imagesURLS,newImageurls])},[images])

    function onImageChange(e){
           
      setImages([...e.target.files])
      console.log("imagesURLS",imagesURLS)
      console.log("images",images)
      const photo = e.target.files
      console.log("targetfiles",photo)
      const values = e.target.value
      console.log("values",values)
     
  }
    function deleteHandler(imageSRC) {
      setImagesURLS(imagesURLS.filter((e) => e !== imageSRC));
      URL.revokeObjectURL(imageSRC)
     
    }
    return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Alzhma
            </Typography>
           
            <Button color="inherit">Sair</Button>
          </Toolbar>
        </AppBar>
      </Box>
  
       
        <Container>

          <Card style={{backgroundColor:"#"}} >

            <TextField
            variant="standard"
            type="file"
            id="outlined-name"
            label="Foto"
            value={name}
            onChange={onImageChange}
            />

            {/*<input type="file" multiple accept='image/*'onChange={onImageChange}  />*/}
            { imagesURLS.map((imageSRC,index)=> (
                
                  <CardContent>
                    <p>{index}</p>
                    {/* <img key={index}src={imageSRC} style={{width:"150px"}}/> */}
                    <Button onClick={() => deleteHandler(imageSRC)}>
                    Remover Foto
                    </Button>
                   </CardContent>
                ))}
          </Card>
     


      {images[0]?
      <Card>
        <CardContent>
            <div>
              <h3>Detalhes da Foto</h3>
              {/*<TextField
            variant="standard"
            type="text"
            id="outlined-name"
            label="Categoria Pessoa"
            name='categoryPessoa'
            value={""}
            onChange={(categoryDetail)=>setCategoryDetail([...e.target.values])}
            onSubmit={(prev)=>setCards([...prev,e.target.values])}
      />*/}

                <Formik
                initialValues = {{category:[{categoryPessoa:'',categoryFamilia:'',categoryLocal:'',categoryEvento:'',file:[]}] }}
                onSubmit={ 
                  function c (values,files){
                    const {name,value} = values
                    setCards({...cards,[name]:value})
                    console.log('cards',cards)
                    console.log("files",files)                  
                  }
                 
   
                }
                render={({ values }) => (
  
                  <Form>
                    <p><label htmlFor=""name="categoryPessoa">Categoria Pessoa :  
                      <Field type="text" name="categoryPessoa" placeholder="Categoria Pessoa" />
                    </label></p>
                    <p><label htmlFor=""name="categoryFamilia">Categoria Familia : 
                      <Field type="text" name="categoryFamilia" placeholder="Categoria Familia" />
                    </label></p>
                    <p><label htmlFor=""name="categoryLocal">Categoria Local : 
                      <Field type="text" name="categoriaLocal" placeholder="Categoria Local" />
                    </label></p>
                    <p><label htmlFor=""name="categoryEvento">Categoria Evento :   
                      <Field type="text" name="categoryEvento" placeholder="Categoria Evento" />
                    </label></p>
                    <TextField
                      variant="standard"
                      type="file"
                      id="outlined-name"
                      label="Foto"
                      name={values.file}
                      value={values.file}
                      onChange={onImageChange}
                      onSubmit={console.log("values.file",values.file)}
                      />
                 
                    <div>
                      <button type="submit">
                        Enviar
                      </button>
                    </div>
                    <div>
                      <p>index </p>
                      <p>values ===   {console.log('valuesformik',values.categoryPessoa)} </p>
                      <p>values  categoryPessoa =====   {values.file}</p>
                      <p> imagesURLS    ==== {imagesURLS}</p>
                     
                      { imagesURLS.map((imageSRC,index)=> 
                       
                         (<>
                          <p>index   ====  {index}</p>
                          <img key={index}src={imageSRC} style={{width:"150px"}}/>
                         </>
                         ))}

                      
                     
                    
                    
                    </div>
                    <p>cards ==== {cards.categoryPessoa}</p>
                  </Form>
                                
                )}
               
                />
            </div>
          </CardContent>
      </Card>:
      <h3> Adicione uma Foto</h3>}
    
      </Container>  

    </>
    )
}

