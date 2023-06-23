import React, { useEffect } from "react";
import Game from "../game/Game";

const Trainer = () => {
    useEffect(()=>{
        document.title = 'Braillesson | trainer'
    })
    
    return  (
        <Game/>
    )
    
    
}

export default Trainer