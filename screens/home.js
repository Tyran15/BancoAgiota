import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/style';

export default function Home() {
  const naviagtion = useNavigation();

  const goToLogin = () => {
    naviagtion.navigate('Login');
  }
  const goToSingup = () => {
    naviagtion.navigate('Cadastro');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Seja bem-vindo(a) ao banco agiota!</Text>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={styles.button_text}>Fazer login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToSingup}>
          <Text style={styles.button_text}>Fazer Cadastro</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
