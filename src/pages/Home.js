import React, { useEffect } from "react";


const Home = () =>{
    useEffect(()=>{
        document.title = 'Braillesson | Home'
    })
    return (
        <div>
            <h1>home</h1>
            <p>lorem ....</p>
        </div>
    )
}

export default Home