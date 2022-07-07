import { Switch , Route , Redirect } from 'react-router-dom';

// pages 
import ArchiveProducts from './pages/ArchiveProducts';

// context
import ProductContextProvider from './context/ProductContextProvider';
import ProductsDetails from './components/products/ProductsDetails';

import { getDetailsProducts } from "./api/api"

function App() {

  // console.log(getDetailsProducts())


  return (
   <div>
      <ProductContextProvider>
      
          <Switch>
            <Route path='/products/:id' component={ProductsDetails} />
            <Route path='/products' component={ArchiveProducts} />
            <Redirect to='/products' />
          </Switch>
      </ProductContextProvider>
   </div>
  );
}

export default App;
