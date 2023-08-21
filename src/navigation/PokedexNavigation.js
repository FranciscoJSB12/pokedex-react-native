import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Pokedex'
                component={PokedexScreen}
                options={{
                    title: 'Pokedex',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                 name='Pokemon'
                 component={PokemonScreen}
                 options={{
                     title: 'Pokemon',
                     headerTitleAlign: 'center'
                 }}
            />
        </Stack.Navigator>
    );
}

export default PokedexNavigation;
