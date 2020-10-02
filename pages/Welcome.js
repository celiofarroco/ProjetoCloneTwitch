import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.containerTitle}>
        <Text style={styles.titulo}>Boas-vindas à</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.titulo}>Twitch</Text>
      </View>
      <View style={styles.spacer} />
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Following')}>
          <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight: 'bold'}}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerIgnore}>
        <Text style={styles.ignore}>Ignorar</Text>
      </View>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTitle: {
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8,
    borderRadius: 5,
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#9146ff',
    padding: 8,
    borderRadius: 5,
  },

  containerButton: {
    flex: 0.25,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },

  containerIgnore: {
    paddingTop: 20,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
  },

  ignore: {
    color: '#9146ff',
    fontWeight: 'bold',
  },

  spacer: {
    paddingBottom: 30,
  },
});

export default Welcome;
