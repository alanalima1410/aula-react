import React from 'react';
import logo from './logo.svg';
import './App.css';
import { View1 } from 'components/View1';
import { View2 } from 'components/View2';

function App() {
  return (
  <div style={{backgroundColor: 'yellow' }}>
    <View1 displayText="Test">
    <View2 />
    <View2 />
    <div> Texto </div>
    <View2 />
    <View2 />
    <View2 />
    </View1>
    <View2 />
  </div>
  );
}

export default App;
