import React, { useEffect } from "react";
import './Piece.css'
import { useState } from "react";

function Piece(prop) {

    
    let [a, setA] = useState(prop.data[0])
    let [b, setB] = useState(prop.data[1])
    let [c, setC] = useState(prop.data[2])
    let [d, setD] = useState(prop.data[3])
    let [e, setE] = useState(prop.data[4])
    let [f, setF] = useState(prop.data[5])

    useEffect(()=>{
        prop.data.push(a, b, c, d, e, f)
    },[])
       
    return (
        <div className="piece">
            <div>
                <div id="p1">
                    <input 
                    type="button"
                    name="0"
                    value={a}
                    onClick={() => {a ? setA(0) : setA(1)} }>

                    </input>
                </div>
                
                <div id="p1">
                    <input 
                    type="button"
                    name="0"
                    value={b}
                    onClick={() => {b ? setB(0) : setB(1)} }>

                    </input>
                </div>
            </div>
            <div>
                <div id="p1">
                    <input 
                    type="button"
                    name="0"
                    value={c}
                    onClick={() => {c ? setC(0) : setC(1)} }>

                    </input>
                </div>

                <div id="p1">
                    <input 
                    type="button"
                    name="0"
                    value={d}
                    onClick={() => {d ? setD(0) : setD(1)} }>

                    </input>
                </div>
            </div>
            <div>
                <div id="p1">
                    <input 
                    type="button"
                    name="0"
                    value={e}
                    onClick={() => {e ? setE(0) : setE(1)} }>

                    </input>
                </div>

                <div id="p1">
                    <input 
                    type="button"
                    name="0"
                    value={f}
                    onClick={() => {f ? setF(0) : setF(1)} }>

                    </input>
                </div>
            </div>
        </div>
    )
}

export default Piece