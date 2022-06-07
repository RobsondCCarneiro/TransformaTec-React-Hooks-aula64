import {useState} from 'react'

export default function ChangeColor(){


    const [color, setColor] = useState("Azul")

    //Isto está errado
    //color = "Amarelo"

    return(
        <div>
            <h3>
                Minha cor favorita é {color}
            </h3>
            <button
                onClick={() => setColor("Vermelho")}
            >
                Mudar cor
            </button>
        </div>
    )

}
