import './App.css';
import MobileAppBar from './components/header/MobileAppBar';
import MobileFilterBtn from './components/MobileFilterBtn/MobileFilterBtn';
import GridArchiveProducts from './components/GridArchiveProducts/GridArchiveProducts';
import DesktopNavbar from './components/header/DesktopNavbar';

function App() {
  return (
   <div>
        <DesktopNavbar />
        <MobileAppBar />
        <MobileFilterBtn />
        <GridArchiveProducts />
   </div>
  );
}

export default App;
