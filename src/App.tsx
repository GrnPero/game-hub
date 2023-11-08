import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem gridArea="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
