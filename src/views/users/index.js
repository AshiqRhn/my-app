import React from 'react'
import axios from "axios"

function Users() {
    const [users, setUsers] = React.useState()
    const [userName, setUserName] = React.useState()

        const fetchUser = async () => {
            return await axios.get("https://jsonplaceholder.typicode.com/users")
        }

        const postUser = async (para) => {
            return await axios.post("https://jsonplaceholder.typicode.com/users", para)
        }

        React.useEffect(() => {
            fetchUser().then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch((err) => console.log(err))
        }, [])

        const changeUser = (event) => {
            setUserName(event.target.value)
        }

        const clickChange = () => {
            alert(userName)

            postUser({username: userName})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
        }
    return(
        <div className="center">
            <h2>Users:</h2>
            {users?.map((user, index) => (
                <p>
                name: {user.name}
                username: {user.username}
                </p>            
            ))}

            <input type="text" placeholder="Enter your Email" onChange = {changeUser}/>
            <button onClick = {clickChange}>Submit</button>
           
        </div>
    )
}

export default Users