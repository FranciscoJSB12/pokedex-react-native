import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    title: 'Cuenta',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
}

export default AccountNavigation;