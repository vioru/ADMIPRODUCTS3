import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import NewProduct from "./createProduct";


const AllProducts = props =>{

    const [Products,setProducts] = useState([]);

    // console.log(Products);


    useEffect( () =>{
        axios.get("http://localhost:8000/api/product")
            .then( res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, [Products]);

    const DeleteProduct = id => {
        console.log(id);
        axios.delete("http://localhost:8000/api/product/"+id)
            .then(res =>{
                console.log(Products);
                let nuevaLista = Products.filter(producto => producto._id !== id);
                setProducts(nuevaLista);

            })

        }



    return(
        <div  className="container  col-10  ">
            <NewProduct/> 
            <hr className="bg-dark mt-5" ></hr>
            <div className="text-center">
            <h1 className="mb-4">Todos los productos</h1>

            {Products.map((product, index) => (
                                <>
                                <h3 key={index} ><a href={`http://localhost:3000/product/` + product._id} className="text-dark">{product.name}</a></h3>



                                <Link to={`/product/edit/${product._id}`} className="btn btn-sm btn-warning mx-2 ">Editar</Link>

                                <button className="btn-sm btn-danger mx-2 " onClick={() => DeleteProduct(product._id)}>Eliminar</button>
                                </>
                        ))
                    }
                    
        </div>
        </div>

    )
}

export default AllProducts;