import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#476358',
    alignItems: 'center',
    width: 410,
    justifyContent: 'flex-start   ',
  },
  icons_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 75,
    height: 150,
    width: 150,
    margin: 15,
    borderWidth: 2,
    justifyContent: 'center',
  },
  icon_text: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  subtittle: {
    fontSize: 20,
    marginBottom: '65%',
    fontWeight: 'bold',
    color: '#C7E8E8',
  }
});

export default styles;