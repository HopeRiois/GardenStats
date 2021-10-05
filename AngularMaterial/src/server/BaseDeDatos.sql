## SCRIPT CREACIÓN BD PROYECTO DE SOFTWARE 2

## CREACIÓN DE BASE DE DATOS
CREATE DATABASE IF NOT EXISTS GardenStats;

USE GardenStats;

## CREACIÓN DE TABLAS
CREATE TABLE IF NOT EXISTS LecturaSensores(
	ID_lectura SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	ID_planta SMALLINT NOT NULL,
	Hora_lectura DATETIME NOT NULL,
	Temperatura VARCHAR(5) NOT NULL,
	Humedad VARCHAR(5) NOT NULL,
	Humedad_s1 VARCHAR(5) NOT NULL,
	Humedad_s2 VARCHAR(5) NOT NULL,
	Humedad_s3 VARCHAR(5) NOT NULL,
	Humedad_s4 VARCHAR(5) NOT NULL,
	Humedad_prom VARCHAR(5) NOT NULL,
	Luz VARCHAR(5) NOT NULL
);

CREATE TABLE IF NOT EXISTS Crecimiento(
	ID_crecimiento SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	ID_planta SMALLINT NOT NULL,
	Toma_registrada VARCHAR(5) NOT NULL,
	Fecha_muestra DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS Planta(
	ID_planta SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	Nombre VARCHAR(20) NOT NULL,
	Regar BOOLEAN NOT NULL,
	Luz BOOLEAN NOT NULL
);
