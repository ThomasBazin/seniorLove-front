import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

//Importing components
import EditProfileComponent from './components/EditProfileComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EditProfileComponent />
    </>
  );
}

export default App;
