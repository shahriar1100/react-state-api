import React, { use } from 'react'

export const Users = ({fetchUser}) => {

    const users = use(fetchUser);
    console.log(users);
    
  return (
    <div className='card'>Users</div>
  )
}
