import {Component} from 'react'

import './App.css'
import { Card } from './component/card'

class App extends Component {
    constructor() {
        super()

        this.state = {
            pokemon: [],
            offset: 0,
            editedName: "",
            pokemonStatus: false
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ this.state.offset }`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
            this.setState({ pokemon: pokemon.results })
        })
    }

    onDelete = (index) => {
        this.setState(
            (previousState) => {
                return {
                    pokemon: previousState.pokemon.filter(
                        (_, pokemonIndex) => pokemonIndex !== index
                    )
                }
            }
        )
    }

    onEdit = (newName, index) => {
        this.setState(
            (previousState) => {
                return {
                    pokemon: previousState.pokemon.map(
                        (pokemon, pokemonIndex) => {
                            return {
                                ...pokemon,
                                editedName: pokemonIndex === index ? newName : pokemon.name
                            }
                        }
                    )
                }
            }
        )
    }

    addPokemon = () => {
        const nextPage = this.state.offset + 1
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ nextPage }`)
        .then(response => response.json())
        .then(pokemon => {
            this.setState({
                pokemon: [
                    ...this.state.pokemon,
                    ...pokemon.results
                ].reverse(),
                offset: nextPage,
                pokemonStatus: false
            })
        })
    }

    toggleAddPokemon = () => {
        this.setState({ pokemonStatus: !this.state.pokemonStatus })
    }

    render() {
        const displayModal = this.state.pokemonStatus ? 'flex' : 'none'

        return (
            <div className='App'>
                <div style={{ display: displayModal, justifyContent: 'center', alignItems: 'center', position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div style={{ background: '#fff', borderRadius: 10, width: '40%', height: 'max-content', padding: 30 }}>
                        <h3 style={{ marginTop: 0, color: '#000' }}>Are you sure you want to add more pokemon?</h3>
                        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 30 }}>
                            <button style={{ background: '#fff', color: '#000', border: '1px solid #000' }} onClick={ this.toggleAddPokemon }>Cancel</button>
                            <button onClick={ this.addPokemon }>Confirm</button>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                    <button onClick={ this.toggleAddPokemon } >Add Pokemon</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                    {this.state.pokemon.map((pokemon, index) => (
                        <Card
                            key={pokemon.index}
                            index={index}
                            name={pokemon.name}
                            editedName={ pokemon.editedName }
                            onEdit={ this.onEdit }
                            onDelete={this.onDelete}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App
