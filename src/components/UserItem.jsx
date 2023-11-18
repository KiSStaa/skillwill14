import React from 'react'

const UserItem = ({id, name,action}) => {

   console.log('user', id)

 return(
    <div className="user-item">
        <p>Ongoing Homework: {name}</p>

        <button onClick={() => action(id)}>Remove</button>
     </div>
     
  )
}



export default React.memo(UserItem)