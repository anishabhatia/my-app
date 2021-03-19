import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AirportInfo from './components/AirportInfo';


function App() {
  return (
    <div className="App">
      <Header title="Flight Information"></Header>
      {/* extra directions for users */}
      <p>Please use 3-letter abbreviations (ex. USD, GBP, etc) for currency and put dates in YYYY-MM or YYYY-MM-DD form for the best results.</p>
      {/* entire middle portion that will include three tables - flights, carriers, and airport conversion table */}
      <a href={"https://www.easymarkets.com/int/learn-centre/discover-trading/currency-acronyms-and-abbreviations/"}>Click here to find currency abbreviations</a>
      <AirportInfo></AirportInfo>
      
      <Footer title="Find your perfect vacation using SkyScanner!"></Footer>
    </div>
  );
}

export default App;
