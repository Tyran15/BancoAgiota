import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Home_usuario from '../screens/home_usuario';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: '#1d1d1d'}}}>
            <Tab.Screen
                name="Home"
                component={Home_usuario}
                options={{
                    tabBarIcon: ({}) => (
                        <Image
                            source={require('../assets/images/dollar.png')}
                            resizeMode='contain'
                            style={[
                                styles.icon
                            ]}
                        />
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        borderWidth: 2, // Largura da borda
        borderRadius: 50, // Raio da borda para deixar arredondada
        marginBottom: 60,
        padding: 50,
        backgroundColor: '#1d1d1d',
        width: 80, 
        height: 80, 
        borderColor: 'black'
    },
});

export default TabNavigator;
