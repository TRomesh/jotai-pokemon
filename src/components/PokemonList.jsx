
import { useAtom } from "jotai";
import { pokemonsAtom, deletePokemonAtom, pokemonAtom, darkModeAtom } from "../Store"
import { List, ListItem, ListIcon, ListContent, ListHeader, ListDescription, Segment } from 'semantic-ui-react'

function Row({ id, name, power, description, selectPokemon, deletePokemon }) {
    return (
        <ListItem>
            <ListIcon name="trash alternate outline" onClick={() => deletePokemon(id)}></ListIcon>
            <ListIcon name="edit outline" onClick={() => selectPokemon({ id, name, power, description })}></ListIcon>
            <ListContent>
                <ListHeader as="h3">{name}</ListHeader>
                <ListHeader as="h5">{power}</ListHeader>
                <ListDescription>{description}</ListDescription>
            </ListContent>
        </ListItem>
    )
}

function PokemonList() {

    const [darkMode,] = useAtom(darkModeAtom)
    const [, setPokemon] = useAtom(pokemonAtom);
    const [, DeletePokemon] = useAtom(deletePokemonAtom);
    const [pokemons,] = useAtom(pokemonsAtom);


    const deletePokemon = (id) => {
        DeletePokemon(id)
    }

    const selectPokemon = (pokemon) => {
        setPokemon(pokemon)
    }

    return (
        <Segment inverted={darkMode}>
            <List inverted={darkMode}>
                {pokemons && pokemons.map((pokemon) => {
                    return <Row key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        power={pokemon.power}
                        selectPokemon={selectPokemon}
                        deletePokemon={deletePokemon}
                        description={pokemon.description}></Row>
                })}
            </List>
        </Segment>
    )
}

export default PokemonList
