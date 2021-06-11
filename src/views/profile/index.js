import React from 'react'
import axios from 'axios'

function  Profile() {
    const [userNames, setUserNames] = React.useState()

    const fetchUserName = async () => {
        return await axios.get("https://jsonplaceholder.typicode.com/users")
    }

    React.useEffect(() => {
        fetch().then((res) => {
            console.log(res.target.value)
            setUserName(res.target.value)
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
           {userNames.map((userName, index) => (
                <h2>
                    username: (username.username)
                </h2>
           ))}
        </div>
    )
}

export default  Profile
