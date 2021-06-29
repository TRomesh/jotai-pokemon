import { useAtom } from "jotai"
import { darkModeAtom } from "../Store"
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import PokemonList from "./PokemonList";
import PokemonForm from "./PokemonForm"


function Home() {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    return (
        <Grid padded inverted={darkMode}>
            <GridRow>
                <GridColumn width={2}></GridColumn>
                <GridColumn width={12}><PokemonForm /></GridColumn>
                <GridColumn width={2}></GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={2}></GridColumn>
                <GridColumn width={12}><PokemonList /></GridColumn>
                <GridColumn width={2}></GridColumn>
            </GridRow>
        </Grid>
    )
}

export default Home
