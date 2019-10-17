import React, { useState } from 'react';
import { MemberForm } from './components/MemberForm';
import { MemberCard } from './components/MemberCard';
import  membersData from './MemberData';
import './App.css';

function App() {
  const [members, setMembers] = useState(membersData)
  const [search, setSearch] = useState('')

  const addNewMember = member => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <input 
      name='searchField' 
      id='searchField' 
      placeholder='Search Members' 
      value='search' 
      onChange={handleSearch}
      /> 
      <MemberForm addNewMember={addNewMember} />
      <MemberCard members={members} />
    </div>
  );
}

export default App;
