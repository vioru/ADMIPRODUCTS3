import React, {useEffect, useState} from "react";
import {Link, useParams ,useHistory} from "react-router-dom";
import axios from "axios";

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+id)
            .then(res => {
                
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const DeleteProduct = id => {
        console.log(id);
        axios.delete("http://localhost:8000/api/product/"+id)
            .then(res =>{

                history.push("/");
            })

        }
    
    return(
        <div className="row mb-5">
            <div className="col-2"></div>
            <div className="card text-center col-8">
                <div className="card-header "><h1>{product.name}</h1></div>
                <div className="card-body">
                    <h2>Precio: ${product.price}</h2>
                    <p> Descripción: 
                        { ' '+product.description}
                    </p>
                    
                    <Link to="/" className="btn btn-primary mx-2">Regresar</Link>
                    <Link to={`/product/edit/${product._id}`} className="btn btn-warning mx-2">Editar</Link>
                    <button className="btn btn-danger mx-2" onClick={() => DeleteProduct(product._id)}>Eliminar</button>
                </div>
            </div>
        </div>


    )


}

export default Product;