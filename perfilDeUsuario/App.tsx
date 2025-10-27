import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { usuario } from './models/usuario';
import UsuarioPerfil from './components/usuarioPerfil';

export default function App() {

  let listaUsuarios: usuario[] = [{
    nombre: 'pedro',
    edad: 28,
    ciudad: 'sps',
    ocupacion: 'chef'
  },
  {
    nombre: 'fredy',
    edad: 21,
    ciudad: 'tegus',
    ocupacion: 'ingeniero'
  },
  {
    nombre: 'omar',
    edad: 24,
    ciudad: 'tegus',
    ocupacion: 'agronomo'
  }]

  return (
    < View style={styles.container} >

      <Text>Perfiles de usuarios</Text>

      

      {
        listaUsuarios.map((item) => (
          <View key={item.edad}>
            
            <UsuarioPerfil usuario={item}></UsuarioPerfil>
          </View>
        ))
      }

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
