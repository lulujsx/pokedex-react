import { PokeTypes } from "../utils/BackgroudByType";

export type PokeType = {
    name: PokeTypes | 'All';
    url?: string;
}

export type AllPokemonsResults = {
    name: string;
    url: string;
}