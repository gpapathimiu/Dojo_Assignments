import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div>
        <Header className="header"/>
        <div className="d-flex">
          <Navigation />
          <Main>
              <SubContents/>
              <SubContents />
              <SubContents />
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}

export default App;

