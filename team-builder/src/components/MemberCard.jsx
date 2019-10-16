import React from 'react';

export const MemberCard = ( props ) => {
    return (
        <div className='member-list'>
            {props.members.map((member, index) => {
                return (
                    <div className='member-card' key={index}>
                        <h2>{member.name} | {member.role}</h2>
                        <p>{member.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
