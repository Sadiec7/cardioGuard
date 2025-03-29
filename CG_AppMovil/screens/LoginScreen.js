// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.link}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8F5A8', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 20,
  },
  link: {
    color: '#444',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FF7F7F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoContainer: {
    width: 160,
    height: 160,
    borderRadius: 80, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
});
