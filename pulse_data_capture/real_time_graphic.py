import serial
import json
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from collections import deque
from datetime import datetime

# Configura tu puerto COM y velocidad
puerto_serial = 'COM4'  # Cambia según tu sistema y tu puerto
velocidad = 115200

# Configura n: cuántos puntos quieres mostrar
n = 100  # Últimos 100 valores

# Inicializa cola para los valores
valores_bpm = deque([0]*n, maxlen=n)
tiempos = deque([datetime.utcnow()]*n, maxlen=n)

# Conexión a Serial
ser = serial.Serial(puerto_serial, velocidad, timeout=1)
print("⏳ Escuchando datos del ESP32 y graficando en tiempo real...")

# Configura la figura de matplotlib
fig, ax = plt.subplots()
linea, = ax.plot([], [], lw=2)
ax.set_ylim(0, 300)  # Ajusta según el rango de tu sensor
ax.set_xlim(0, n)
ax.set_title("BPM en tiempo real")
ax.set_xlabel("Muestras")
ax.set_ylabel("BPM")
plt.grid(True)

# Función de actualización de la gráfica
def actualizar(frame):
    try:
        linea_serial = ser.readline().decode('utf-8').strip()
        if linea_serial and "{" in linea_serial:
            print("📥 Recibido:", linea_serial)
            try:
                data = json.loads(linea_serial)
                
                bpm = data["avg_bpm"]
                print(bpm)
                if bpm is not None:
                    valores_bpm.append(bpm)
                    tiempos.append(datetime.utcnow())
                    linea.set_data(range(len(valores_bpm)), list(valores_bpm))
            except json.JSONDecodeError:
                print("⚠️ Línea inválida (no JSON):", linea_serial)
    except Exception as e:
        print("❌ Error:", e)

    return linea,

# Inicializa la gráfica
def init():
    linea.set_data([], [])
    return linea,

ani = animation.FuncAnimation(fig, actualizar, init_func=init, blit=True, interval=100)

try:
    plt.show()
except KeyboardInterrupt:
    print("\n🚪 Cerrando conexión...")
    ser.close()
