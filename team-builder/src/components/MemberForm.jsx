import React, { useState } from 'react';

export const MemberForm = (props) => {
    const [member, setMember] = useState({id: '', name: '', email: '', role: ''})

    const memberChangeHandler = event => {
        setMember({...member, [event.target.name] : event.target.value})
        console.log(event.target.name, event.target.value)
    }
    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                    <input
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Member Name'
                    onChange={memberChangeHandler}
                    value={member.name}
                    />
                <label htmlFor='email'>Email</label>
                    <input
                    name='email'
                    id='email'
                    type='text'
                    placeholder='Enter Email'
                    value={member.email}
                    onChange={memberChangeHandler}
                    />
                <label htmlFor='role'>Role</label>
                    <input 
                    name='role'
                    id='role'
                    type='text'
                    placeholder='Enter Role'
                    value={member.role}
                    onChange={memberChangeHandler}
                    />
            </form>
        </div>
    )
}
