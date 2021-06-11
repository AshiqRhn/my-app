import React from 'react'
import router from 'next/router'
import Header from '../home/components/Header'

function  SignUp() {

    const [email, setEmail] = React.useState()

    React.useEffect(() => {
        alert("Do you want to Sign up?")
    }, [])

    const data = {
        title: "Sign up"
    }

    const yourEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const signUpNow = () => {
        if (email === "abc@gmail.com") {
            router.push("/signUpPage")
        } else {
            alert("Denied")
        }
        alert(email)
    }

    return (      
        <div>
            <Header data = {data} />
            <input type="text" placeholder="Enter your Email" onChange={yourEmail} />
            <button onClick={signUpNow}>Submit</button>
        </div>
    )
}

export default  SignUp
