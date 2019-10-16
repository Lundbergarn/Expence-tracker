import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import AmountContextProvider from './contexts/AmountContext';
import AmountForm from './components/AmountForm';
import AmountList from './components/AmountList';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <AmountContextProvider>
        <Navbar />
        <Container>
          <AmountForm />
          <AmountList />
        </Container>
      </AmountContextProvider>
    </div>
  );
}

export default App;
