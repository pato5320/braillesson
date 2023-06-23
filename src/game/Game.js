
import ReactDOM from "react-dom/client"
import Piece from "./Piece"
import letters from "./letters"

function Game(){
    let chars = 'abcdefghijklmnopqrstuvwxyz'
    let num = Math.floor(Math.random() * 26)
    let letra = chars[num]

    console.log(letters[letra])
    console.log(letters['nothing'])

    return (
            <div className="container">
                <div>
                    letra actual: {letra}
                </div>
                <div>
                    <Piece data={letters[letra]}></Piece>

                </div>
                <div>
                    <Piece data={letters['nothing']}></Piece>
                </div>
            </div>

        )


}

export default Game