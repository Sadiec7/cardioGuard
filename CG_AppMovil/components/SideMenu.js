import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

export default function SideMenu({ onClose, onLogout }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.menu}>
        <ScrollView>
          <TouchableOpacity style={styles.menuItem} onPress={onClose}>
            <Ionicons name="person-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>

          <View style={styles.menuItem}>
            <Ionicons name="moon-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Tema Oscuro</Text>
            <Switch value={false} />
          </View>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="lock-closed-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Cambiar Contraseña</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="warning-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Reportar Errores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Feather name="phone-call" size={22} color="#000" />
            <Text style={styles.menuText}>Contacto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Ayuda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Entypo name="book" size={22} color="#000" />
            <Text style={styles.menuText}>Manual de Usuario</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="hand-left-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Enviar Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="document-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Política de Privacidad</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.menuItem} onPress={onLogout}>
            <Ionicons name="log-out-outline" size={22} color="#000" />
            <Text style={styles.menuText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 60, 
    left: 0,
    width: '70%',
    height: '100%',
    zIndex: 999,
  },
  menu: {
    flex: 1,
    backgroundColor: '#78CA78',
    padding: 15,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
