import './App.css';
import MobileAppBar from './components/header/MobileAppBar';
import MobileFilterBtn from './components/MobileFilterBtn/MobileFilterBtn';
import GridArchiveProducts from './components/GridArchiveProducts/GridArchiveProducts';

function App() {
  return (
   <div>
        <MobileAppBar />
        <MobileFilterBtn />
        <GridArchiveProducts />
   </div>
  );
}

export default App;
