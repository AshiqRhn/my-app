import React from 'react'
import Header from '../home/components/Header'
import router from "next/router"


function  Login() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("") 

    React.useEffect(() => {
        alert("Welcome to my page")
    }, [])


    const data = {
        title: "Sign in"
    }

    const onChangeEmail = (event) => {
        console.log(event.target.value)   
        setEmail(event.target.value)     
    }

    const onChangePassword = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const onClickSubmit = () => {
        if (email === "abc@gmail.com" && password === "password") {
            router.push("/about")
        } else {
            alert("Denied")
        }
        alert(email + "" + password)
    }

    return (
        <div className="center">
        <Header data={data} />
            <input type="email" 
            placeholder="Enter Email" 
            className="padding-all" 
            onChange={onChangeEmail} />

            <input type="password" 
            placeholder="Enter Password" 
            className="padding-all"
            onChange={onChangePassword} />
            
            <button className="padding-all" onClick={onClickSubmit}>Submit</button>
        </div>
    )
}

export default  Login
