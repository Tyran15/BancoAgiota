import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from 'react-native';
import Home from '../screens/home.js';
import TabNavigator from './tab.navigator.js';
import Login from '../screens/login.js';
import Cadastro from '../screens/cadastro.js';
import Home_usuario from '../screens/home_usuario.js';
import logo from '../assets/images/logo.png'

// Criação da navegação Stack
const Stack = createStackNavigator();

const headerOptions = {
    headerStyle: {
        height: 120,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: '#2C3F38',
    },
    headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    headerTitle: () => (
        <Image
            source={logo}
            style={{ width: 80, height: 80 }}
        />
    ),
};

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={headerOptions} />
            <Stack.Screen name="Home_Usuario" component={TabNavigator} options={headerOptions} />
            <Stack.Screen name="Login" component={Login} options={headerOptions} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={headerOptions} />
        </Stack.Navigator>
    );
}





export default StackNavigator;
