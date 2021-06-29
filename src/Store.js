import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { focusAtom } from 'jotai/optics'

const updateItem = (array, data) => {
    let pokemon = array.find((pokemon) => pokemon.id === data.id);
    let updatedPokemon = { ...pokemon, ...data };
    let pokemonIndex = array.findIndex((pokemon) => pokemon.id === data.id);
    return [
        ...array.slice(0, pokemonIndex),
        updatedPokemon,
        ...array.slice(++pokemonIndex),
    ];
}

const deleteItem = (array, id) => {
    return array.filter((pokemon) => pokemon.id !== id)
}

const dataAtom = atom({
    pokemons: [{ id: 1, name: 'Pikachu', power: 'Lightning', description: 'Fluffy' }],
    pokemon: '',
    isEditing: false
})

export const darkModeAtom = atomWithStorage('darkMode', false)

export const pokemonsAtom = focusAtom(dataAtom, (optic) => optic.prop('pokemons'))

export const getPokemonAtom = atom(
    async () => fetch(URL).then((resp) => resp.json())
)

export const addPokemonAtom = atom(
    () => "",
    (get, set, pokemon) => {
        set(pokemonsAtom, [...get(pokemonsAtom), pokemon])
    }
)

export const updatePokemonAtom = atom(
    () => "",
    (get, set, pokemon) => {
        set(pokemonsAtom, updateItem(get(pokemonsAtom), pokemon))
    }
)

export const deletePokemonAtom = atom(
    () => "",
    (get, set, id) => {
        set(pokemonsAtom, deleteItem(get(pokemonsAtom), id))
    }
)

export const pokemonAtom = atom(get => get(dataAtom).pokemon);

export const editAtom = atom(get => get(dataAtom).isEditing);


export default dataAtom