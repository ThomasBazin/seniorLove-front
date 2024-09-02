import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

//Importing components
import EditProfileComponent from './components/EditProfileComponent';
import HeadbandComponent from './components/HeadbandComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeadbandComponent />
      <EditProfileComponent />
    </>
  );
}

export default App;
