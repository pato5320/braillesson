import React, { useEffect } from "react";


const Nopage = () => {
    useEffect(()=>{
        document.title = 'Braillesson | 404'
    })
    return (
        <div>
            <h1>Not found...</h1>
            <p>404 ....</p>
        </div>
    )
}

export default Nopage