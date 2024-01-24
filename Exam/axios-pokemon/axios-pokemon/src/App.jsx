import { useEffect, useState } from 'react'

import './App.css'
import { fetchPokemon } from './axios-pokemon'
import Card from './components/Card'

function App() {
    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)
    const [pokemonStatus, setPokemonStatus] = useState(false);
    // const [editedName, setEditedName] = useState("")

    useEffect(() => {
        const getPokemon = async () => {
            const postPokemon = await fetchPokemon(0)
            setPokemon(postPokemon)
        }
        getPokemon()
    }, [])

    // const onDelete = (index) => {
    //     this.setState(
    //         (previousState) => {
    //             return {
    //                 pokemon: previousState.pokemon.filter(
    //                     (_, pokemonIndex) => pokemonIndex !== index
    //                 )
    //             }
    //         }
    //     )
    // }

    const onDelete = (index) => {
        setPokemon(
            (previousState) => {
                    console.log(previousState)
                return (
                    previousState.filter(
                        (_, pokemonIndex) => pokemonIndex !== index
                    )
                )
            }
        )
    }

    // onEdit = (newName, index) => {
    //     this.setState(
    //         (previousState) => {
    //             return {
    //                 pokemon: previousState.pokemon.map(
    //                     (pokemon, pokemonIndex) => {
    //                         return {
    //                             ...pokemon,
    //                             editedName: pokemonIndex === index ? newName : pokemon.name
    //                         }
    //                     }
    //                 )
    //             }
    //         }
    //     )
    // }

    const onEdit = (newName, index) => {
        setPokemon((previousPokemon) => {
            return previousPokemon.map(
                (pokemon, pokemonIndex) => {
                    return {
                        ...pokemon,
                        editedName: pokemonIndex === index ? newName : pokemon.name,
                    }
                }
            )
        })
    }
    // addPokemon = () => {
    //     const nextPage = this.state.offset + 1
    //     fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ nextPage }`)
    //     .then(response => response.json())
    //     .then(pokemon => {
    //         this.setState({
    //             pokemon: [
    //                 ...this.state.pokemon,
    //                 ...pokemon.results
    //             ].reverse(),
    //             offset: nextPage,
    //             pokemonStatus: false
    //         })
    //     })
    // }
    // convert it on react hooks

    const addPokemon = () => {
        const nextPage = offset + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${nextPage}`)
        .then(response => response.json())
        .then(data => {
            const reversedPokemon = data.results.reverse();
            setPokemon(prevPokemon => [...prevPokemon, ...reversedPokemon]);
            setOffset(nextPage);
            setPokemonStatus(false);
        })
        .catch(error => {
            console.error('Error fetching Pokemon:', error);
            // Handle error or update state accordingly
        });
    };
    // const addPokemon = async () => {
    //     const nextPage = offset + 1;

    //     try {
    //         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${nextPage}`);
    //         const data = response.data;

    //         const reversedPokemon = data.results.reverse();
    //         setPokemon(prevPokemon => [...prevPokemon, ...reversedPokemon]);
    //         setOffset(nextPage);
    //         setPokemonStatus(false);
    //     } catch (error) {
    //         console.error('Error fetching Pokemon:', error);
    //         // Handle error or update state accordingly
    //     }
    // };

    // useEffect(() => {
    //     addPokemon();
    // }, []);

    // toggleAddPokemon = () => {
    //     this.setState({ pokemonStatus: !this.state.pokemonStatus })
    // }
    const toggleAddPokemon = () => {
        setPokemonStatus(prevStatus => !prevStatus);
    };

    const displayModal = pokemonStatus ? 'flex' : 'none';
    
    return (
        <div className='App'>
            <div style={{ display: displayModal, justifyContent: 'center', alignItems: 'center', position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
                <div style={{ background: '#fff', borderRadius: 10, width: '40%', height: 'max-content', padding: 30 }}>
                    <h3 style={{ marginTop: 0, color: '#000' }}>Are you sure you want to add more pokemon?</h3>
                    <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 30 }}>
                        <button style={{ background: '#fff', color: '#000', border: '1px solid #000' }} onClick={ toggleAddPokemon }>Cancel</button>
                        <button onClick={ addPokemon }>Confirm</button>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: 20 }}>
                <button onClick={ toggleAddPokemon } >Add Pokemon</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                {pokemon.map((pokemon, index) => (
                    // <div key={pokemon.name}>
                    //     <h2>{pokemon.name}</h2>
                    // </div>
                    <Card
                        key={pokemon.index}
                        index={index}
                        name={pokemon.name}
                        editedName={ pokemon.editedName }
                        onEdit={ onEdit }
                        onDelete={ onDelete }
                    />
                ))}
            </div>
        </div>
    )
}

export default App
