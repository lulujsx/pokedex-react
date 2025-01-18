import styles from './styles.module.scss'
import { useContext } from 'react';
import { PokeballIconSmall } from '../../assets/pokeball';
import { PokemonContext } from '../../context/PokemonContext';
import { PokemonList } from '../../components/PokemonList';
import { Pagination } from '../../components/Pagination';
import { usePagination } from "../../hooks/usePagination";
import { Filters } from '../../components/Filters';


export const Home = () => {

  const { pokemonsFiltered } = useContext(PokemonContext)
  const { page, nextPage, previousPage, backToHome } = usePagination();
  let perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <PokeballIconSmall fill="white"/>
          <span>Pokédex</span>
        </div>
      </header>
      <div id="container" className={styles.container}>
        <Filters/>
        <PokemonList pokemonUrls={pokemonsFiltered} page={page} perPage={perPage}/>
        <Pagination
          page={page}
          perPage={perPage}
          nextPage={nextPage}
          previousPage={previousPage}
          maxItems={pokemonsFiltered?.length!}
        />
      </div>
    </div>
  )
}
