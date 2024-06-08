import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import styles from '../assets/style';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigation();

    const goToLogin = () => {
        navigator.navigate('Login');
      }

    const validateDate = (date) => {
        const [day, month, year] = date.split('/').map(Number);
        if (day > 31 || month > 12 || year > new Date().getFullYear()) {
            return false;
        }
        return true;
    };

    const handleDateChange = (date) => {
        if (validateDate(date)) {
            setData(date);
        } else {
            setData('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title_login}>Cadastro</Text>
            <View style={styles.input_container_singup}>
                <TextInput
                    placeholder='Nome Completo'
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                />
                <MaskedTextInput
                    mask="999.999.999-99"
                    value={cpf}
                    onChangeText={setCPF}
                    placeholder='CPF'
                    keyboardType='number-pad'
                    style={styles.input}
                />
                <MaskedTextInput
                    mask="(99) 99999-9999"
                    value={phone}
                    onChangeText={setPhone}
                    placeholder='Num. Telefone'
                    keyboardType='number-pad'
                    style={styles.input}
                />
                <MaskedTextInput
                    mask="99/99/9999"
                    value={data}
                    onChangeText={handleDateChange}
                    placeholder='Data de Nascimento'
                    keyboardType='number-pad'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button_login}>
                    <Text style={styles.button_text}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToLogin}>
                    <Text style={styles.text_link}>Não tem uma conta?</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
