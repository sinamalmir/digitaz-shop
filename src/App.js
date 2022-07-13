import { Switch , Route , Redirect } from 'react-router-dom';

// pages 
import ArchiveProducts from './pages/ArchiveProducts';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

// context
import ProductContextProvider from './context/ProductContextProvider';


function App() {


  return (
   <div>

      <ProductContextProvider>   
          <Switch>
            <Route path='/product/:id/cart' component={Cart} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/products' component={ArchiveProducts} />
            <Redirect to='/products' />
          </Switch>
      </ProductContextProvider>
   
   </div>
  );
}

export default App;
