import { useState } from 'react';

//Importing components
import EditProfileComponent from './components/EditProfileForm';
import HeadbandComponent from './components/Headband';
import MobileFooterMenuV1 from './components/MobileFooterMenuV1';
import MobileFooterMenuV2 from './components/MobileFooterMenuV2';
import NavBar from './components/NavBarV1';

function App() {
  return (
    <>
      <NavBar />
      <HeadbandComponent />
      <EditProfileComponent />
      <MobileFooterMenuV1 />
      <MobileFooterMenuV2 />
    </>
  );
}

export default App;
