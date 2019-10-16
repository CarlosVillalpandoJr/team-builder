import React, { useState } from 'react';
import { MemberForm } from './components/MemberForm';
import { MemberCard } from './components/MemberCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm />
      <MemberCard />
    </div>
  );
}

export default App;
