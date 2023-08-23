import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonList from '../Components/PokemonList';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';

const PokedexScreen = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    
    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);
    
    const loadPokemons = async () => {
        try {
            const res = await getPokemonsApi(nextUrl);
            
            setNextUrl(res.next);

            const pokemonsArray = [];
            
            for await (const pokemon of res.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                });
            }
            setLoading(false);
            setPokemons([...pokemons, ...pokemonsArray]);
        } catch (err) {
            setLoading(false);
            setError(true);
            console.error(err);
        }
    }
    return (
        <SafeAreaView>
            {loading && <Text>Cargando...</Text>}
            {error && <Text>Hubo un error...</Text>}
            {pokemons?.length > 0 && <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} nextUrl={nextUrl}/>}
        </SafeAreaView>
    );
}

export default PokedexScreen;