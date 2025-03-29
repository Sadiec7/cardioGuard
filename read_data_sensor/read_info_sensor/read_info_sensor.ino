#define PulseSensor_PIN 32 
#define LED_PIN         2

int Signal;             // Valor leído (ADC) del sensor de pulso
int UpperThreshold = 600;
int LowerThreshold = 450;

// Variables para detección de latidos y cálculo de BPM
bool inPeak = false;                
unsigned long lastBeatTime = 0;     
float BPM = 0;                      

// Promedio móvil simple
const int windowSize = 5;
float bpmWindow[windowSize] = {0};   
int bpmIndex = 0;
bool windowFilled = false;
float avgBPM = 0;

float calculateBPMAVG() {
  float sum = 0;
  int count = windowFilled ? windowSize : bpmIndex;
  for (int i = 0; i < count; i++) {
    sum += bpmWindow[i];
  }
  return (count > 0) ? sum / count : 0;
}

void setup() {
  Serial.begin(115200);
  Serial.println();
  delay(2000);

  analogReadResolution(10);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  Signal = analogRead(PulseSensor_PIN);

  if (Signal > UpperThreshold && !inPeak) {
    inPeak = true;

    unsigned long currentTime = millis();
    if (lastBeatTime > 0) {
      unsigned long beatInterval = currentTime - lastBeatTime;
      BPM = 60000.0 / (float)beatInterval;

      // Guardar BPM en la ventana circular
      bpmWindow[bpmIndex] = BPM;
      bpmIndex = (bpmIndex + 1) % windowSize;
      if (bpmIndex == 0) windowFilled = true;

      avgBPM = calculateBPMAVG();
    }
    lastBeatTime = currentTime;
  }

  if (Signal < LowerThreshold) {
    inPeak = false;
  }

  digitalWrite(LED_PIN, Signal > UpperThreshold ? HIGH : LOW);

  // Imprimir datos en formato JSON
  Serial.print("{\"signal\": ");
  Serial.print(Signal);
  Serial.print(", \"bpm\": ");
  Serial.print(BPM, 1);
  Serial.print(", \"avg_bpm\": ");
  Serial.print(avgBPM, 1);
    Serial.print(", \"avg_edge\": ");
  Serial.print(avgBPM/1.5, 1);
  Serial.println("}");

  delay(1000);
}
