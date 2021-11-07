import React from 'react';
// import GetBookView from './components/GetBookView';
import ListBookView from './components/ListBookView';
// import RegisterBookView from './components/RegisterBookView';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <GetBookView /> */}
      <ListBookView />
      {/* <RegisterBookView /> */}
    </div>
  );
};

export default App;
