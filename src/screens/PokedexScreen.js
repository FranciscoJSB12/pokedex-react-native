import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { getPokemonsApi } from '../api/pokemon';

const PokedexScreen = () => {
    const [pokemons, setPokemons] = useState(null);
    
    useEffect(() => {
        (async () => {
            const result = await getPokemonsApi();
            setPokemons(result);
        })();
    }, []);
    
    console.log(pokemons);
    
    return (
        <Text>Pokedex</Text>
    );
}

export default PokedexScreen;