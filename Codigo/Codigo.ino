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
int gh1,gh2,gh3,gh4;

void setup() {
  //Aquí se configurar las variables, para iniciarlas o definirlas como datos entrada u salida
  
  Serial.begin(9600); //Se inicia el monito serial para vislumbrar los datos de los sensores con una frecuencia de 9600
  dht.begin();  //Inicializamos el sensor dht11
  Serial.print("H_Ambiente: \tTemperatura: \tH_suelo1: \tH_suelo2: \tH_suelo3: \tH_suelo4: \n");
}

void loop() {
  // Estas instrucciones se repitiran infinitamente en el lapso de tiempo definido o delay
  
  float h = dht.readHumidity(); //Lectura de humedad
  float t = dht.readTemperature(); // lectura de temperatura
  
  //lectura de los 4 sensores de humedad del suelo
  gh1= (analogRead(A1))/100,  gh2= (analogRead(A2))/100,  gh3= (analogRead(A3))/100,  gh4= (analogRead(A4))/100;

  //impresión de datos en el monitor serial
  Serial.print(h), Serial.print(" \t\t "), Serial.print(t), Serial.print(" \t\t "), Serial.print(gh1), Serial.print(" \t\t ");
  Serial.print(gh2), Serial.print(" \t\t "), Serial.print(gh3), Serial.print(" \t\t "), Serial.print(gh4), Serial.print(" \n ");

  delay(5000); //se pone un lapso de 5 segundos para lectura de datos de tal forma que no se sobresature 
}
