import { useState } from 'react';

//Importing components
import EditProfileComponent from './components/EditProfileForm';
import HeadbandComponent from './components/Headband';
import MobileFooterMenuV1 from './components/MobileFooterMenuV1';
import MobileFooterMenuV2 from './components/MobileFooterMenuV2';
import NavBarV1 from './components/NavBarV1';
import NavBarV2 from './components/NavBarV2';
function App() {
  return (
    <>
      <NavBarV2 />
      <NavBarV1 />
      <HeadbandComponent />
      <EditProfileComponent />
      <MobileFooterMenuV1 />
      <MobileFooterMenuV2 />
    </>
  );
}

export default App;
