import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HealthScreen() {
  return (
    <View style={styles.container}>
      {/* 🔝 Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../assets/heart-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>CardioGuard</Text>
        </View>
        <Ionicons name="menu" size={26} color="#fff" />
      </View>

      {/* 📄 Contenido */}
      <View style={styles.whiteBox}>
        {/* Título */}
        <View style={styles.titleRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
          </View>
          <Text style={styles.title}>Tu salud</Text>
        </View>

        {/* Línea separadora */}
        <View style={styles.separator} />

        {/* Datos personales */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Ionicons name="person" size={20} color="#A94444" />
              <Text style={styles.label}>Paola Piñón García</Text>
            </View>
            <Text style={styles.info}>19 <Text style={{ fontSize: 12 }}>años</Text></Text>
          </View>

          <View style={[styles.rowBetween, { marginTop: 10 }]}>
            <View style={styles.row}>
              <MaterialIcons name="monitor-weight" size={20} color="#A94444" />
              <Text style={styles.info}>58 kg</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="accessibility-outline" size={20} color="#A94444" />
              <Text style={styles.info}>1.55 m</Text>
            </View>
          </View>
        </View>

        {/* Notas adicionales */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="document-text-outline" size={22} color="#333" />
            <Text style={styles.noteTitle}>Notas Adicionales:</Text>
          </View>
          <Text style={styles.noteText}>
            Antecedentes familiares respecto a problemas cardiovasculares
          </Text>
        </View>

        {/* Espacio para gráfica */}
        <View style={styles.graphContainer}>
      <Image
    source={require('../assets/ecg-prototype.png')}
    style={styles.graphImage}
  />
</View>

      </View>
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
    card: {
      backgroundColor: '#F8F8F8',
      borderRadius: 12,
      padding: 12,
      marginBottom: 16,
      elevation: 2,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      color: '#333',
      fontWeight: '500',
    },
    info: {
      fontSize: 16,
      color: '#333',
    },
    noteTitle: {
      marginLeft: 8,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    noteText: {
      marginTop: 6,
      fontSize: 14,
      color: '#444',
    },
    graphPlaceholder: {
      height: 200,
      backgroundColor: '#EAEAEA',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      borderStyle: 'dashed',
      borderWidth: 2,
      borderColor: '#bbb',
    },
    graphText: {
      color: '#777',
      fontSize: 16,
      fontStyle: 'italic',
    },
    graphContainer: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      overflow: 'hidden',
      height: 200,
    },
    
    graphImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 12,
    },
    
  });
  