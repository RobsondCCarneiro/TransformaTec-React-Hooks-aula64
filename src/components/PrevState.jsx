import React, {useState} from 'react';

export default function PrevState(){

    const [balance, setBalance] = useState(100)

    const deposit = () => {

        setTimeout(() => {
            //setBalance(balance + 100)
            setBalance((prevState) => prevState + 100)
        }, 3000)
    }

    return(
        <div>
            <button onClick={deposit}>Depositar 100</button>
            <button
                onClick={() => setBalance(balance - 200)}
            >
                Sacar 200
            </button>
            <h3>Meu saldo é: {balance}</h3>
        </div>
    )
}