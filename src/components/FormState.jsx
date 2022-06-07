import React, {useState} from 'react';

export default function FormState(){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const showData = (event) => {

        event.preventDefault()
        alert(username + ' ' + email)
    }

    return (
        <form onSubmit={showData}>

            <input type="text"
                value={username}
                onchange={event => setUsername(event.target.value)}
                name = "username"
                placeholder="Username"
            />

            <input type="text"
                value={email}
                onchange={event => setEmail(event.target.value)}
                name = "email"
                placeholder="email"
            />
        </form>
    )
}