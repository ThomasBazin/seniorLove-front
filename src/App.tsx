import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

//Importing components
import EditProfileComponent from './components/EditProfileForm';
import HeadbandComponent from './components/Headband';
import MobileFooterMenuV1 from './components/MobileFooterMenuV1';
import MobileFooterMenuV2 from './components/MobileFooterMenuV2';

function App() {
  return (
    <>
      <HeadbandComponent />
      <EditProfileComponent />
      <MobileFooterMenuV1 />
      <MobileFooterMenuV2 />
    </>
  );
}

export default App;
