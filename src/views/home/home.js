import React from 'react'
import Wrapper from '../../components/atoms/Wrapper'
import Header from '../../components/atoms/Header'
import router from "next/router"


function Home() {
    const data = {
        title: "object header",
        subtitle: "Subway Hellow",
        address: "Address",
        name: "Ashiq",
    }
    return (
        <Wrapper>
           <Header data={data} />
           <h2>Home</h2>  

           <button onClick={() => {
            router.push("/about")
            }}>Go to About</button> 

      <a href="/login" className="padding-all">Go to Login</a>
      <a href="/signup" className="padding-all">Sign up</a> 
      <a href="/user" className="padding-all">Go to Users Page</a>

        </Wrapper>
    )
}

export default Home
 