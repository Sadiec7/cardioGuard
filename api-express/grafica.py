import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Establecer un estilo moderno
sns.set_style("darkgrid")
plt.style.use("seaborn-v0_8-dark")

# 1. Cargar CSV
df = pd.read_csv("pulso_export.csv")

# 2. Convertir 'date' y 'time' en un solo datetime
df['datetime'] = pd.to_datetime(df['date'] + ' ' + df['time'])

# 3. Ordenar por tiempo (si es necesario)
df = df.sort_values('datetime')

# 4. Graficar BPM en función del tiempo (sin círculos en los picos)
plt.figure(figsize=(12, 6))
plt.plot(df['datetime'], df['bpm'], linestyle='-', linewidth=2, color='#FF6F61', label='BPM')

# 5. Formatear la gráfica
plt.xlabel('Tiempo', fontsize=12, fontweight='bold', color='white')
plt.ylabel('Frecuencia Cardíaca (BPM)', fontsize=12, fontweight='bold', color='white')
plt.title('Evolución del BPM en el Tiempo', fontsize=14, fontweight='bold', color='white')
plt.xticks(rotation=45, color='white')
plt.yticks(color='white')
plt.legend(facecolor='black', edgecolor='white')
plt.grid(True, linestyle='--', alpha=0.5)

# 6. Fondo oscuro para mejorar visibilidad
plt.gca().set_facecolor("#222222")
plt.gcf().set_facecolor("#111111")

# 7. Mostrar la gráfica
plt.show()
