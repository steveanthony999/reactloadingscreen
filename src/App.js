import { useEffect, useState } from 'react';
import LoadingScreen from 'react-loading-screen';

import Logo from './logo.svg';

import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 5000);
  }, []);

  return (
    <LoadingScreen
      loading={isLoaded}
      bgColor='#f1f1f1'
      spinnerColor='#000000'
      // textColor='#676767'
      // logoSrc={Logo}
      // text='Here an introduction sentence (Optional)'
    >
      <div className='App'>
        <h1>Hello World</h1>
      </div>
    </LoadingScreen>
  );
}

export default App;
