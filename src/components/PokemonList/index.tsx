import { PokemonCard } from '../PokemonCard';
import styles from './styles.module.scss';

interface Props {
    pokemonUrls?: string[] | null,
    page: number,
    perPage: number
}

export const PokemonList = ({ pokemonUrls, page, perPage } : Props) => {
  return (
    <div className={styles.pokemons}>
       {pokemonUrls
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
  )
}

