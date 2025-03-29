import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SideMenu from '../components/SideMenu';

export default function NotificationsScreen({ navigation }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setShowMenu(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../assets/heart-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>CardioGuard</Text>
        </View>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Ionicons name={showMenu ? 'close' : 'menu'} size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <View style={styles.whiteBox}>
        {/* Título con ícono */}
        <View style={styles.titleRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </View>
          <Text style={styles.title}>Notificaciones</Text>
        </View>

        {/* Línea separadora */}
        <View style={styles.separator} />

        {/* Notificación 1 */}
        <View style={styles.notificationCard}>
          <Text style={styles.notificationTitle}>Próxima cita:</Text>
          <View style={styles.row}>
            <Ionicons name="time-outline" size={18} color="#6BBF59" style={{ marginRight: 6 }} />
            <Text style={styles.notificationText}>Mañana 16:00 sala 28-4</Text>
          </View>
        </View>

        {/* Notificación 2 */}
        <View style={styles.notificationCard}>
          <Text style={styles.notificationTitle}>Te daremos de alta:</Text>
          <View style={styles.row}>
            <Ionicons name="flag-outline" size={18} color="#6BBF59" style={{ marginRight: 6 }} />
            <Text style={styles.notificationText}>Programado 24 de mayo</Text>
          </View>
        </View>
      </View>

      {/* Menú lateral */}
      {showMenu && (
        <SideMenu onClose={() => setShowMenu(false)} onLogout={handleLogout} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8F5A8',
    paddingTop: 40,
  },
  header: {
    height: 60,
    backgroundColor: '#78CA78',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  headerText: {
    color: '#07315B',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  whiteBox: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
    padding: 15,
    elevation: 5,
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF675C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  separator: {
    height: 1.5,
    backgroundColor: '#736E6E',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 1,
  },
  notificationCard: {
    backgroundColor: '#F7D3D3',
    padding: 12,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  notificationTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 15,
    color: '#333',
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


  