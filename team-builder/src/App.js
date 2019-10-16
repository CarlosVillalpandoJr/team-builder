import React, { useState } from 'react';
import { MemberForm } from './components/MemberForm';
import { MemberCard } from './components/MemberCard';
import  membersData from './MemberData';
import './App.css';

function App() {
  const [members, setMembers] = useState(membersData)
  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm />
      <MemberCard members={members} />
    </div>
  );
}

export default App;
