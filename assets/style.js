import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#476358',
    alignItems: 'center',
    height: 800,
  },
  logo: {
    width: 125,
    height: 125,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    marginTop: '22%',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  title_login: {
    color: '#fff',
    fontSize: 50,
    marginTop: '18%',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  text_link: {
    marginTop: 15,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  button_container: {
    marginTop: '25%',
  },
  button: {
    backgroundColor: '#faee91',
    height: 50,
    width: 200,
    marginTop: '5%',
    borderRadius: 10,
  },
  button_login: {
    backgroundColor: 'green',
    height: 50,
    width: 350,
    marginTop: '10%',
    borderRadius: 10,
  },
  button_text: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button_text: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input_container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '15%',
    alignItems: 'center',
  },
  input_container_singup: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '2%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#faee91',
    height: 50,
    width: 350,
    marginTop: '5%',
    borderRadius: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

export default styles;