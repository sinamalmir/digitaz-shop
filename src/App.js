import './App.css';
import MobileAppBar from './components/header/MobileAppBar';
import MobileFilterBtn from './components/MobileFilterBtn/MobileFilterBtn';
import GridArchiveProducts from './components/GridArchiveProducts/GridArchiveProducts';
import DesktopNavbar from './components/header/DesktopNavbar';
import BottomNavigation from './components/BottomMobileNavigation/BottomNavigation';

function App() {
  return (
   <div>
        <DesktopNavbar />
        <MobileAppBar />
        <MobileFilterBtn />
        <GridArchiveProducts />
        <BottomNavigation />
   </div>
  );
}

export default App;
