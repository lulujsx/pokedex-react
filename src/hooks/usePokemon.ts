import axios from "axios"
import { IPokemon } from "../interfaces/interfaces"
import { useEffect, useState } from "react"

export const usePokemon = (url?: string, id?: string) => {
    const [ pokemon, setPokemon ] = useState<null | undefined | IPokemon>()

    const fetchPokemon = async () => {
        if(url) {
            const { data }: any = await axios.get(url)
            setPokemon(data)
        } else if(id) {
            const { data }: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemon(data)
        }
    }

    useEffect(()=>{
        fetchPokemon()
    },[])

    return {pokemon}

}