import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/style';
import Database from '../src/database/config';
import * as SQLite from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = SQLite.openDatabase('db.db');

export default function Login() {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [userData, setUserData] = useState(null);
  const navigator = useNavigation();

  // Função para verificar as credenciais no banco de dados SQLite
  const checkCredentials = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users WHERE cpf = ? AND senha = ?',
          [cpf, senha],
          (_, { rows }) => {
            // Verifica se retornou algum registro
            if (rows.length > 0) {
              saveDataToAsyncStorage(rows._array);
              resolve(true);
            } else {
              // Credenciais inválidas
              resolve(false);
            }
          },
          (_, error) => {
            console.error("Erro ao verificar credenciais:", error);
            reject(error);
          }
        );
      });
    });
  };

  const saveDataToAsyncStorage = async (data) => {
    try {
      // Salvar os dados no AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(data));
      // Definir os dados no estado local
      setUserData(data);
      console.log('Dados salvos localmente.');
      console.log(data);
    } catch (error) {
      console.error('Erro ao salvar dados no AsyncStorage:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const isValid = await checkCredentials();
      if (isValid) {
        navigator.navigate('Home_Usuario');
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error("Erro ao verificar credenciais:", error);
      alert('Ocorreu um erro ao verificar as credenciais');
    }
  };

  const goToSignup = () => {
    navigator.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Database />
      <Text style={styles.title_login}>Login</Text>
      <View style={styles.input_container}>
        <TextInputMask
          type='cpf'
          options={{ mask: '999.999.999-99' }}
          value={cpf}
          onChangeText={setCPF}
          placeholder='CPF'
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button_login} onPress={handleLogin}>
          <Text style={styles.button_text}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSignup}>
          <Text style={styles.text_link}>Não tem uma conta?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
