import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  // Eventos marcados
  const markedDates = {
    '2025-04-09': {
      marked: true,
      dotColor: '#7DCE82',
      selected: true,
      selectedColor: '#7DCE82',
    },
    '2025-04-21': { selected: true, selectedColor: '#7DCE82' },
    '2025-04-19': {
      marked: true,
      dotColor: '#A94444',
      selected: true,
      selectedColor: '#A94444',
    },
    '2025-04-25': {
      marked: true,
      dotColor: '#BEBEBE',
      selected: true,
      selectedColor: '#BEBEBE',
    },
  };

  const [currentMonth, setCurrentMonth] = useState('2025-04');

  // Verifica si el mes tiene eventos
  const monthHasEvents = Object.keys(markedDates).some((date) =>
    date.startsWith(currentMonth)
  );

  return (
    <View style={styles.container}>
      {/* 🔝 Header superior */}
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

      {/* 📅 Contenedor blanco del contenido */}
      <View style={styles.whiteBox}>
        {/* Ícono calendario + título */}
        <View style={styles.calendarTitle}>
          <View style={styles.iconCircle}>
            <Ionicons name="calendar" size={24} color="#fff" />
          </View>
          <Text style={styles.title}>Calendario</Text>
        </View>

        {/* Línea separadora */}
        <View style={styles.separator} />

        {/* Calendario */}
        <Calendar
          monthFormat={'MMMM'}
          markedDates={markedDates}
          onMonthChange={(month) => {
            const formatted = `${month.year}-${String(month.month).padStart(
              2,
              '0'
            )}`;
            setCurrentMonth(formatted);
          }}
          theme={{
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#444',
            selectedDayTextColor: '#fff',
            todayTextColor: '#FF7F7F',
            dayTextColor: '#333',
            arrowColor: '#FF7F7F',
            monthTextColor: '#FF7F7F',
            textMonthFontWeight: 'bold',
          }}
          style={styles.calendar}
        />

        {/* Leyenda condicional */}
        {monthHasEvents && (
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: '#7DCE82' }]} />
              <Text style={styles.legendText}>Chequeo médico</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: '#A94444' }]} />
              <Text style={styles.legendText}>Terapias de recuperación</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: '#BEBEBE' }]} />
              <Text style={styles.legendText}>Dada de alta</Text>
            </View>
          </View>
        )}
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
  },
  calendarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
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
  calendar: {
    borderRadius: 12,
    elevation: 2,
  },
  legendContainer: {
    marginTop: 25,
    gap: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  legendText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
});
