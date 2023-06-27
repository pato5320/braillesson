import './piece-style.css'
import Piece from './Piece'
import letters from "./letters"

function Game(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let num = Math.floor(Math.random() * 26)
    let letter = alphabet[num]

    console.log('rendering game')

    let letter_model = {
        char : letters[letter],
        update : function(update){
            this.char[update] = this.char[update] ? 0 : 1
            console.log('model ' + this.char)
        }
    }

    let letter_user = {
        char : letters['nothing'],
        update : function(update){
            this.char[update] = this.char[update] ? 0 : 1
            console.log('user ' + this.char)
        }
    }

    return (
            <div className="container">
                <div>
                    letra actual: {letter}
                </div>
                <div>
                    <Piece data={letter_model}></Piece>

                </div>
                <div>
                    <Piece data={letter_user}></Piece>
                </div>
            </div>

        )


}

export default Game