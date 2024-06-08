import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/style';

export default function Login() {
    const [text, setText] = useState('');
    const navigator = useNavigation();

    const goToSingup = () => {
      navigator.navigate('Cadastro');
    }
    const goToHomeUser = () => {
      navigator.navigate('Home_Usuario');
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title_login}>Login</Text>
      <View style={styles.input_container}>
        <TextInputMask type='cpf' options={{mask: '999.999.999-99'}} value={text} onChangeText={text => setText(text)} placeholder='CPF' style={styles.input}></TextInputMask>
        <TextInput placeholder='Senha' secureTextEntry={true} style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button_login} onPress={goToHomeUser}>
          <Text style={styles.button_text}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSingup}>
          <Text style={styles.text_link}>Não tem uma conta?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
