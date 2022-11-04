import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";

const UpdateProduct =()=>{
    const {id}= useParams();

    const [name ,setName] = useState("");
    const [price ,setPrice] = useState("");
    const [description ,setDescription] = useState ("");

    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/"+id)
        .then( res =>{
            console.log('esto es la res',res);
            setName(res.data.name);
            setPrice(res.data.price);
            setDescription(res.data.description);

        })
    
        .catch(err => console.log(err));
    }, [id])

//Función de actualización
const Update = e => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/product/edit/"+id, {
        name,
        price,
        description
    })
        .then(res => history.push("/"))
        .catch(err => console.log(err));
}

        //


    return(
        <div>
            <h1>Edita Producto</h1>
            <form onSubmit={Update} > 
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
                <Link to="/" className="btn btn-danger">Cancelar</Link>
            </form>
        </div>


        
    )




}

export default UpdateProduct;