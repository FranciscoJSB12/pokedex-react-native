import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

const renderPokeball = () => {
    return (
        <Image
            source={{uri: 'https://i.imgur.com/ydMw6ZQ.png'}}
            style={{width: 75, height: 75, top: -15}}
        />
    );
}

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='FavoriteTab' 
                component={FavoritesNavigation}
                options={{
                    tabBarLabel: 'Favoritos',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (<AntDesign name="hearto" size={size} color={color}/>)
                }}
            />
            <Tab.Screen 
                name='PokedexTab' 
                component={PokedexNavigation}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: renderPokeball,
                }}
            />
            <Tab.Screen          
                name='AccountTab' 
                component={AccountNavigation}
                options={{
                    tabBarLabel: 'Cuenta',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (<AntDesign name="user" size={size} color={color}/>)
                }}
            />
        </Tab.Navigator>
    );
}

export default Navigation;