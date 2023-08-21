import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoritesNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Favorite'
                component={FavoriteScreen}
                options={{
                    title: 'Favoritos',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
}

export default FavoritesNavigation;