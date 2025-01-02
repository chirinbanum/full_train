
import { useState,useEffect } from "react";
import axios from 'axios'

var Images = () =>{
  var [images,setImages] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
         .then((res)=>{
            console.log(res.data);
            setImages(res.data)
        }).catch((err)=>{
            console.log(err);
        });
    },[])
   
  return(
    <section>
    <h1>the images fetched are</h1>
    {images.map((images)=>(
     
     <img key ="image.id" src={images.url} alt={"image not found "}/>
   
    ))}
      
    </section>
  )
}
export default Images