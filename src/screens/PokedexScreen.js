import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';

const PokedexScreen = () => {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState(null);
    
    useEffect(() => {
        (async () => {
            const res = await getPokemonsApi();

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
            setPokemons(pokemonsArray);
        })();
    }, []);
    
    return (
        <>
            {loading ? <Text>Cargando...</Text> : <Text>{JSON.stringify(pokemons)}</Text>}
        </>
    );
}

export default PokedexScreen;