import React, {useState} from "react";
import axios from "axios";
import {useHistory}  from "react-router-dom";

const NewProduct = () =>{

    const [name ,setName] = useState("");
    const [price ,setPrice] = useState("");
    const [description ,setDescription] = useState ("");

    const history = useHistory();



    const saveProduct = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/product/",{
            name,
            price,
            description
        })

        .then(res=>{
            console.log('el id es:',res.data._id);
            setName("");
            setPrice("");
            setDescription("");
            console.log(res);
            history.push("/");
            // history.push("/product/"+res.data._id); redirije a detalle del producto
        })
        .catch(err => console.log(err));


    }


    return(
        <div className="container col-10">
            <h1 className="text-center" >Nuevo Producto</h1>
            <form onSubmit={saveProduct} >
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" className="form-control" value={name} onChange={e=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="price" name="price" className="form-control" value={price} onChange={e=>setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description" className="form-control" 
                    value={description} onChange={e=>setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>
        </div>


        
    )



}

export default NewProduct;