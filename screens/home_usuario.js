import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/style_user';
import { Ionicons } from '@expo/vector-icons';

export default function Home_usuario() {
    const naviagtion = useNavigation();

    const goToLogin = () => {
        naviagtion.navigate('Login');
    }
    const goToSingup = () => {
        naviagtion.navigate('Cadastro');
    }
    return (
        <View style={styles.container}>
            <View style={styles.icons_container}>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons style={styles.icon_text} name="home-outline" size={70} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons style={styles.icon_text} name="bar-chart-outline" size={70} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons style={styles.icon_text} name="card-outline" size={70} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons style={styles.icon_text} name="person-outline" size={70} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.subtittle}>Escolha o serviço</Text>
            <StatusBar style="auto" />
        </View>
    );
}
