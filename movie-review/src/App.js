import React from 'react';
import Header from './sectioning/header';
import Main from './sectioning/main';
import Footer from './sectioning/footer';
import './App.css';

export default function App() {
  return (
    <div className="y-sticky">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
