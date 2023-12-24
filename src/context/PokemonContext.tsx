import { createContext, useState } from "react";
import { PokeType, AllPokemonsResults } from "../types/types";
import axios from "axios";

interface ContextProps {
    types: PokeType[],
    filterSelected: PokeType,
    pokemonsFiltered: string[] | null,
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({children}:any) => {
    let allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

    const defaultState: PokeType = {
        name: 'All',
        url: allPokemonsUrl
    }

    const [allPokemons,setAllPokemons] = useState(null)
    const [pokemonsFiltered,setPokemonsFiltered] = useState(null)

    const [types, setTypes] = useState([defaultState])
    const [filterSelected, setFilterSelected] = useState([defaultState])

    const getAllPokemons = async () => {
        const { data } = await axios.get(allPokemonsUrl);
    
        let pokemons = data?.results?.map(
          (pokemon: AllPokemonsResults) => pokemon?.url
        );
    
        setAllPokemons(pokemons);
        setPokemonsFiltered(pokemons);
      };

    return {
        <PokemonContext.Provider>
            {children}
        </PokemonContext.Provider>
    }
}

export default PokemonProvider