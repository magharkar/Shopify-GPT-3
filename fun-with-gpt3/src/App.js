import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import PromptResponseSection from './components/PromptResponseSection/PromptResponseSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="App">
          <PromptResponseSection />
      </div>
      <Footer />
    </>
    
  );
}

export default App;
