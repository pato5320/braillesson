import './piece-style.css'
import { useState } from 'react'

function Piece(prop) {

    console.log('rendering piece')

    let [input, setInput] = useState(prop.data.char)

    function update(e){
        prop.data.update(e.target.name)
        setInput(prev => {
            prev[e.target.name] ? 0 : 1
            console.log(prev)
            return prev
        })
    }
       
    return (
        <div className="piece">
            <div>
                <div>
                    <input 
                    type="button"
                    className={input[0] ? "pieceButton" : "pieceButtonPushed"}
                    name="0"
                    value={input[0]}
                    onClick={update}>

                    </input>
                </div>
                
                <div>
                    <input 
                    type="button"
                    className="pieceButton"
                    name="1"
                    value={input[1]}
                    onClick={update}>

                    </input>
                </div>
            </div>
            <div>
                <div>
                    <input 
                    type="button"
                    className="pieceButton"
                    name="2"
                    value={input[2]}
                    onClick={update}>

                    </input>
                </div>

                <div>
                    <input 
                    type="button"
                    className="pieceButton"
                    name="3"
                    value={input[3]}
                    onClick={update}>

                    </input>
                </div>
            </div>
            <div>
                <div>
                    <input 
                    type="button"
                    className="pieceButton"
                    name="4"
                    value={input[4]}
                    onClick={update}>

                    </input>
                </div>

                <div>
                    <input 
                    type="button"
                    className="pieceButton"
                    name="5"
                    value={input[5]}
                    onClick={update}>

                    </input>
                </div>
            </div>
        </div>
    )
}

export default Piece