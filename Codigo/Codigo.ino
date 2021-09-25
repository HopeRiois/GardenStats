/**
 * Fecha: 4 de agosto del 2021
 * Autores: Alvaro Luis Rios Garzon, Cristian Guillermo Serrano, Pedro Jimenez Buenahora y Lilliana Castellano
 * El codigo a continuación se encarga de traducir los datos de los sensores de humedad DHT11 y HL-69 para luego ser guardados en un excel 
 * Todos los derechos reservados
 * Date: August 4th of 2021
 * From: Alvaro Luis Rios Garzon, Cristian Guillermo Serrano, Pedro Jimenez Buenahora and Lilliana Castellano
 * The next code is able to translate data from humidity sensors DHT11 and HL-69 for saving this in a excel 
 * All right reserved
 */

// Primero se definen las variables y se incluyen las librerias necesarias para el funcionamiento de los sensores 
#include "DHT.h"
#define DHTPIN 9
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
int gh1,gh2,gh3,gh4,ghp;
char hdat[10],tdat[10],sdat1[10],sdat2[10],sdat3[10],sdat4[10],spdat[10];

void setup() {
  //Aquí se configurar las variables, para iniciarlas o definirlas como datos entrada u salida
  
  Serial.begin(9600); //Se inicia el monito serial para vislumbrar los datos de los sensores con una frecuencia de 9600
  dht.begin();  //Inicializamos el sensor dht11
  //Serial.print("H_Ambiente: \tTemperatura: \tH_suelo1: \tH_suelo2: \tH_suelo3: \tH_suelo4: \n");
  Serial.println("CLEARDATA"); //limpia los datos previos 
  Serial.println("LABEL, Hora, Temperatura, Humedad, Humedad_suelo1, Humedad_s2, Humedad_s3, Humedad_s4, Humedad_prom"); 
  //siempre se escribe LABEL, puesto que excel reconoce
  // los siguientes textos como las nombres de las columnas 
  // (La columna tiempo puede dejarse así)
  Serial.println("RESETTIMER"); // pone el temporizador en 0
}

void loop() {
  // Estas instrucciones se repitiran infinitamente en el lapso de tiempo definido o delay
  
  float h = dht.readHumidity(); //Lectura de humedad
  float t = dht.readTemperature(); // lectura de temperatura
  
  //lectura de los 4 sensores de humedad del suelo
  gh1= analogRead(A1),  gh2= analogRead(A2),  gh3= analogRead(A3),  gh4= analogRead(A4);
  ghp= abs((gh1+gh2+gh3+gh4)/4);

  //Se convierte a char los datos de los sensores
  dtostrf(h, 4,2 , hdat); 
  dtostrf(t, 2,2 , tdat);
  dtostrf(gh1, 4,2 , sdat1); 
  dtostrf(gh2, 2,2 , sdat2);
  dtostrf(gh3, 4,2 , sdat3); 
  dtostrf(gh4, 2,2 , sdat4); 
  dtostrf(ghp, 2,2 , spdat);
  
  //impresión de datos en el monitor serial y subirlos al excel
  Serial.print("DATA,TIME,"); 
  Serial.print(tdat),Serial.print(",") ,Serial.print(hdat),Serial.print(","),Serial.print(sdat1),Serial.print(","), Serial.print(sdat2),Serial.print(",");
  Serial.print(sdat3), Serial.print(","),Serial.print(sdat4),Serial.print(","),Serial.println(spdat);

  delay(5000); //se pone un lapso de 5 segundos para lectura de datos de tal forma que no se sobresature 
}
