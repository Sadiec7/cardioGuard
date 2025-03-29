import serial
import json
from pymongo import MongoClient
from datetime import datetime

# Configura tu puerto COM y velocidad
puerto_serial = 'COM4'  # Cambia según tu sistema y tu puerto
velocidad = 115200

# URI de MongoDB Atlas (usa tu string aquí)
mongo_uri = 'ingresa tu URI de MongoDB Atlas aquí'

# Configura nombre de base de datos y colección
nombre_bd = 'test'
nombre_coleccion = 'pulso'

# Conexión a Serial y MongoDB Atlas
ser = serial.Serial(puerto_serial, velocidad, timeout=1)
cliente = MongoClient(mongo_uri)
bd = cliente[nombre_bd]
coleccion = bd[nombre_coleccion]

print("⏳ Escuchando datos del ESP32 y subiendo a MongoDB Atlas...")

while True:
    try:
        linea = ser.readline().decode('utf-8').strip()
        if linea:
            print("📥 Recibido:", linea)
            try:
                data = json.loads(linea)
                data["timestamp"] = datetime.utcnow()  # Marca de tiempo
                coleccion.insert_one(data)
                print("Insertado en MongoDB Atlas:", data)
            except json.JSONDecodeError:
                print("Línea inválida (no JSON):", linea)
    except KeyboardInterrupt:
        print("\n🚪 Cerrando conexión...")
        break

# Cierre limpio
ser.close()
cliente.close()
