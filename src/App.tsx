import { useState } from 'react';

//Importing components
import EditProfileComponent from './components/EditProfileForm';
import HeadbandComponent from './components/Headband';
import MobileFooterMenuV1 from './components/MobileFooterMenu/MobileFooterMenuV1';
import MobileFooterMenuV2 from './components/MobileFooterMenu/MobileFooterMenuV2';
import NavBarV1 from './components/NavBar/NavBarV1';
import NavBarV2 from './components/NavBar/NavBarV2';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBarV2 />
      <NavBarV1 />
      <HeadbandComponent />
      <EditProfileComponent />
      <MobileFooterMenuV1 />
      <MobileFooterMenuV2 />
      <Footer />
    </>
  );
}

export default App;
