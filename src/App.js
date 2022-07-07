import './App.css';

// pages
import ArchiveProducts from './pages/ArchiveProducts';

// context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
   <div>
      <ProductContextProvider>
          <ArchiveProducts />
      </ProductContextProvider>
   </div>
  );
}

export default App;
