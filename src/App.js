import './App.css';
import MobileAppBar from './components/header/MobileAppBar';
import MobileFilterBtn from './components/MobileFilterBtn/MobileFilterBtn';
import MobileProducts from './components/products/MobileProducts';

function App() {
  return (
   <div>
        <MobileAppBar />
        <MobileFilterBtn />
        <MobileProducts />
   </div>
  );
}

export default App;
