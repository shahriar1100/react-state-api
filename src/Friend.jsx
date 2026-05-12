import React from 'react'

export default function Friend({friend}) {
    console.log(friend);
    const {name} = friend
    const {email} = friend
    const {phone} = friend
    
  return (
    <div className='card2'>
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
    </div>
  )
}
