import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [agreePromos, setAgreePromos] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Registro</Text>

      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar contraseña" secureTextEntry />
      <TextInput style={styles.input} placeholder="Fecha de nacimiento (dd/mm/yyyy)" />
      <TextInput style={styles.input} placeholder="Género" />
      <TextInput style={styles.input} placeholder="Doctor asignado" />

      <TouchableOpacity style={styles.checkRow} onPress={() => setAgreePromos(!agreePromos)}>
        <View style={[styles.checkbox, agreePromos && styles.checked]} />
        <Text style={styles.checkText}>Quiero recibir anuncios y promociones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.checkRow} onPress={() => setAgreePrivacy(!agreePrivacy)}>
        <View style={[styles.checkbox, agreePrivacy && styles.checked]} />
        <Text style={styles.checkText}>
          He leído y acepto la <Text style={{ fontWeight: 'bold' }}>Política de Privacidad</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8F5A8',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  logoWrapper: {
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 20,
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF675C',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    marginVertical: 6,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#444',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#FF675C',
    borderColor: '#FF675C',
  },
  checkText: {
    fontSize: 12,
    color: '#444',
  },
  button: {
    backgroundColor: '#FF675C',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
