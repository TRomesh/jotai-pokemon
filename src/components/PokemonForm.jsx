import { useAtom } from "jotai"
import { addPokemonAtom, editAtom, darkModeAtom } from "../Store"
import { useState } from "react"
import { Form, FormField, Header, Input, Button, Segment } from 'semantic-ui-react'

const initState = { name: '', power: '', description: '' }


function PokemonForm() {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const [newPokemon, setNewPokemon] = useState(initState);
    const [isEditing, setIsEditing] = useAtom(editAtom)
    const [, addPokemon] = useAtom(addPokemonAtom)

    const createPokemon = () => {
        addPokemon({ ...newPokemon, id: Math.random() })
        clear();
    }

    const updatePokemon = () => {
        addPokemonAtom(newPokemon)
    }

    const onChange = (type, value) => {
        setNewPokemon({ ...newPokemon, [type]: value })
    }

    const clear = () => {
        setNewPokemon(initState)
    }

    const cancel = () => {
        clear()
    }

    return (
        <Segment inverted={darkMode}>
            <Form>
                <FormField>
                    <Header as="h5" inverted={darkMode}>Name</Header>
                    <Input value={newPokemon.name} onChange={(e, { value }) => onChange('name', value)} />
                </FormField>
                <FormField>
                    <Header as="h5" inverted={darkMode}>Power</Header>
                    <Input value={newPokemon.power} onChange={(e, { value }) => onChange('power', value)} />
                </FormField>
                <FormField>
                    <Header as="h5" inverted={darkMode}>Description</Header>
                    <Input value={newPokemon.description} onChange={(e, { value }) => onChange('description', value)} />
                </FormField>
                <Button onClick={() => isEditing ? updatePokemon() : createPokemon()} inverted={darkMode}>{isEditing ? 'Update' : 'Save'}</Button>
                <Button onClick={() => cancel()} inverted={darkMode}>Cancel</Button>
            </Form>
        </Segment>
    )
}

export default PokemonForm
