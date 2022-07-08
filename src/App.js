import { Switch , Route , Redirect } from 'react-router-dom';

// pages 
import ArchiveProducts from './pages/ArchiveProducts';
import ProductPage from './pages/ProductPage';

// context
import ProductContextProvider from './context/ProductContextProvider';


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
