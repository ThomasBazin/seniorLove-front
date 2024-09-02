import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

//Importing components
import EditProfileComponent from './components/EditProfileComponent';
import HeadbandComponent from './components/HeadbandComponent';
import MobileFooterMenu from './components/MobileFooterMenuV1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeadbandComponent />
      <EditProfileComponent />
      <MobileFooterMenu />
    </>
  );
}

export default App;
