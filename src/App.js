import { Switch , Route , Redirect } from 'react-router-dom';

// pages 
import ArchiveProducts from './pages/ArchiveProducts';

// context
import ProductContextProvider from './context/ProductContextProvider';
import ProductsDetails from './components/products/ProductsDetails';
import ProductPage from './pages/ProductPage';

import { getDetailsProducts } from "./api/api"

function App() {


  return (
   <div>

      <ProductContextProvider>   
          <Switch>
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/products' component={ArchiveProducts} />
            <Redirect to='/products' />
          </Switch>
      </ProductContextProvider>
   
   </div>
  );
}

export default App;
