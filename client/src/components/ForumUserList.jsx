import React from 'react'
import ForumUser from './ForumUser.jsx'
/*
As several times before, I am going to use a map here. 
I'm not sure how this will mesh with redux, so have fun. 


*/



const fakeUsers = [
    {name: 'HUGHJASSHOLE', id: '001' },
    {name: 'I.C. WIENER', id: '002' },
    {name: 'John', id: '003' },
    {name: 'FDT', id: '004' },
    {name: 'Overwatch000443', id: '005'},
    {name: 'Kool Kuy', id: '006'},
]

const UsersScrollBox = {
    height: '200px',
    width: '200px',
    border: '5px',
    overflow: 'auto',
}


const ForumUserList = () => (
    <div>
      <div style = {UsersScrollBox} >
          users for CURRENT_CLAN_NAME
        {fakeUsers.map(user =>
        <ForumUser user = {user} key= {user.id} />
        )}
      </div>
    </div>
)

export default ForumUserList