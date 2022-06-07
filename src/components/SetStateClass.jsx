import React from 'react';

export default class SetStateClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Robson',
            age: 27
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={
                        () => this.setState({name: 'Robson da Costa'})
                    }
                >
                    Atualizar nome
                </button>
                
            </div>
        )
    }
}