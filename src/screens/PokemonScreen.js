import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';

const PokemonScreen = (props) => {
    
    const { navigation, route:{ params } } = props;
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await getPokemonDetailsApi(params.id);
                setPokemon(res);
            } catch (err) {
                navigation.goBack();
                console.error(err);
            }
        })();
    },[params]);

    if (!pokemon) return null;

    return (
        <View>
            <Text>{pokemon.name}</Text>
        </View>
    );
}

export default PokemonScreen;