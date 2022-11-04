import {BrowserRouter, Route,Switch} from 'react-router-dom'
import AllProducts from './components/allProducts';
import NewProduct from './components/createProduct';

import Product from './components/product';
import UpdateProduct from './components/updateProduct';


const App =() => {
  return (
    <div className="container">

      {/* { path == "/"?
      <NewProduct/> : null } */}
  

      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> < AllProducts/> } />
          <Route path="/product/:id" exact render={()=> <Product/> }/>
          <Route path="/new" exact render={()=> <NewProduct/>} />
          <Route path="/product/edit/:id" exact render={()=> <UpdateProduct/>} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;