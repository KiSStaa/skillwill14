import { useCallback, useState } from "react";
import UserItem from "./UserItem";

const UsersList = () => {
    const [inputValue, setInputValue]= useState('')
    const [users, setUsers] = useState([{id:1, name: 'Default'}])
   
const onChange = (event) => {
    const value = event.target.value
    setInputValue(value)
}

const addHomework = (event) => {
    event.preventDefault()

    const user = {
        id: users.length + 1,
        name: inputValue
    }
    setUsers((prevState) => [...prevState, user])
    setInputValue('')
}

const removeUser = useCallback((id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id))
},[])
        
    return(
        <div className="users">
            <form onSubmit={addHomework} className="user-form">
                <input type="text" onChange={onChange} value={inputValue}/>
                <button type="submit">Add Homework</button>
            </form>

            {users.map((user) =>(
                <UserItem key={user.id} id={user.id} name={user.name} action={removeUser}/>
            ))}
                
        </div>
            
        )
    }


export default UsersList