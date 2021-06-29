import { useAtom } from "jotai";
import { darkModeAtom } from "../Store";
import { Checkbox, Grid, GridRow, GridColumn, Menu, MenuItem } from 'semantic-ui-react'

function Navigation({ children }) {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    return (
        <Grid padded="vertically" inverted={darkMode}>
            <GridRow stretched>
                <GridColumn width={16}>
                    <Menu fixed="top" inverted={darkMode}>
                        <MenuItem as="a" header>
                            <div>Pokemons</div>
                        </MenuItem>
                        <MenuItem position="right">
                            <Checkbox
                                toggle
                                onChange={(e) => setDarkMode(!darkMode)}
                                checked={darkMode} />
                        </MenuItem>
                    </Menu>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={16}>{children}</GridColumn>
            </GridRow>
        </Grid>
    )
}

export default Navigation
