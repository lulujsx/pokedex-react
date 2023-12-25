import { PokeTypes } from "../utils/BackgroudByType";

export type PokeType = {
    name: PokeTypes | 'All';
    url?: string;
}

export type AllPokemonsResult = {
    name: string;
    url: string;
}

export type PokemonsByTypeResult = {
    pokemon: {
      name: string;
      url: string;
    };
  };