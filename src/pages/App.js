import './App.css';
import CustomRouter from '../routes';

import i18n from '../utils/i8ln';

i18n.init();

function App() {
  return (
    <>
      <CustomRouter />
    </>
  );
}

export default App;
