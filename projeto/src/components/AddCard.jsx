import {Card, CardContent, ImageList,ImageListItem} from '@mui/material'
import {Form, Formik,Field,FieldArray,useFormik} from 'formik'
import { useEffect,useState } from 'react';
import styles from './AddCard.module.css'

export function AddCard(){

  const [images,setImages] = useState([])
  const [imagesURLS,setImagesURLS] = useState([])
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
        <div style={{display:"flex"}}>
          <Card style={{backgroundColor:""}} >
                      <input type="file" multiple accept='image/*'onChange={onImageChange}  />
                    { imagesURLS.map((imageSRC,index)=> (
                
                  <CardContent>
                    <p>{index}</p>
                    <img key={index}src={imageSRC} style={{width:"150px"}}/>
                    <button onClick={() => deleteHandler(imageSRC)}>
                    Remover Foto
                    </button>
                   </CardContent>
                ))}
          </Card>
        </div>


      {images[0]?
      <Card>
        <CardContent>
            <div>
              <h3>Detalhes da Foto</h3>
                <Formik
                initialValues = {{category:[{categoryPessoa:'',categoryFamilia:'',categoryLocal:'',categoryEvento:''}] }}
                onSubmit={ 
                  function c (values){
                    setCards([...cards,values])
                    console.log('cards',cards)                  
                  }
                 
   
                }
                render={({ values,index }) => (
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
                    <div>
                      <button type="submit">
                        Enviar
                      </button>
                    </div>
                    <div>
                      <p>index </p>
                      <p>values ===   {console.log(values.category)} </p>
                      <p>values  categoryPessoa =====   {values.categoryPessoa}</p>
                      <p> imagesURLS    ==== {imagesURLS}</p>
                      <p>index   ====  {imagesURLS.index}</p>
                    </div>

                  </Form>
                )}
                />
            </div>
          </CardContent>
      </Card>:
      <h3> Adicione uma Foto</h3>}

    </>
    )
}

