## SCRIPT CREACIÓN BD PROYECTO DE SOFTWARE 3

## CREACIÓN DE BASE DE DATOS
CREATE DATABASE IF NOT EXISTS GardenStats;

USE GardenStats;


## CREACIÓN DE TABLAS

CREATE TABLE IF NOT EXISTS usuario(
	ID_usuario SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	Nombres VARCHAR(50),
	Apellidos VARCHAR(50),
	us VARCHAR(50),
	contraseña VARCHAR(50),
	correo VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS planta(
	ID_planta SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ID_usuario SMALLINT NOT NULL,
	Nombre VARCHAR(20) NOT NULL,
	Regar BOOLEAN NOT NULL,
	Luz BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS lecturaSensores(
	ID_lectura SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	ID_planta SMALLINT NOT NULL,
	Temperatura VARCHAR(10) NOT NULL,
	Humedad VARCHAR(10) NOT NULL,
	Humedad_s1 VARCHAR(10) NOT NULL,
	Humedad_s2 VARCHAR(10) NOT NULL,
	Humedad_s3 VARCHAR(10) NOT NULL,
	Humedad_s4 VARCHAR(10) NOT NULL,
	Humedad_prom VARCHAR(10) NOT NULL,
	Luz VARCHAR(10) NOT NULL,
	Fecha_lectura VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS crecimiento(
	ID_crecimiento SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	ID_planta SMALLINT NOT NULL,
	Registro VARCHAR(5) NOT NULL,
	Fecha_muestra DATE NOT NULL
);


#Creación usuario 
CREATE USER 'admin'@'172.17.0.1' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'172.17.0.1' WITH GRANT OPTION;

# Selects
select * From planta;
select * From usuario;
select * From crecimiento;
select * From lecturaSensores;

#Drops tables
DROP table planta;
DROP table usuario;
DROP table crecimiento;
DROP table lecturaSensores;

## Referencia de foreign key
ALTER TABLE planta ADD FOREIGN KEY (ID_usuario) REFERENCES usuario(ID_usuario);
ALTER TABLE crecimiento ADD FOREIGN KEY (ID_planta) REFERENCES planta(ID_planta);
ALTER TABLE lecturaSensores ADD FOREIGN KEY (ID_planta) REFERENCES planta(ID_planta);

## insercion 
INSERT INTO usuario values(null,"Alvaro","Rios","admin","admin","arios@gardenstats.co");
INSERT INTO usuario values(null,"Cristian","Serrano","danteurus","admin","cserrano@gardenstats.co");
INSERT INTO usuario values(null,"Ana","Sanchez","anita","anadl123","asanchez@gmail.com");
INSERT INTO usuario values(null,"Pepe","Gonzales","admin","elpepe*","pgonzales@hotmail.com");

INSERT INTO planta values(null,1,"Tomate",false,false);
INSERT INTO planta values(null,1,"Sandia",true,false);
INSERT INTO planta values(null,1,"Pepino",false,false);
INSERT INTO planta values(null,2,"Tomate",false,false);
INSERT INTO planta values(null,2,"Mora",false,false);
INSERT INTO planta values(null,2,"Banano",false,true);
INSERT INTO planta values(null,2,"Platano",false,true);
INSERT INTO planta values(null,3,"Mango",false,false);
INSERT INTO planta values(null,3,"Fresa",false,false);
INSERT INTO planta values(null,4,"Frambuesa",false,false);
INSERT INTO planta values(null,4,"Tamarindo",false,false);

INSERT INTO crecimiento values(null,1,"4","2022-01-07");
INSERT INTO crecimiento values(null,1,"5","2022-01-22");
INSERT INTO crecimiento values(null,1,"7","2022-02-14");
INSERT INTO crecimiento values(null,2,"12","2022-01-22");
INSERT INTO crecimiento values(null,2,"16","2022-02-14");
INSERT INTO crecimiento values(null,3,"3","2022-02-14");
INSERT INTO crecimiento values(null,4,"2","2022-01-01");
INSERT INTO crecimiento values(null,4,"3","2022-01-11");
INSERT INTO crecimiento values(null,4,"3","2022-01-21");
INSERT INTO crecimiento values(null,4,"4","2022-01-31");
INSERT INTO crecimiento values(null,5,"4","2022-01-11");
INSERT INTO crecimiento values(null,5,"4","2022-01-21");
INSERT INTO crecimiento values(null,5,"4","2022-01-31");
INSERT INTO crecimiento values(null,6,"20","2022-01-21");
INSERT INTO crecimiento values(null,6,"22","2022-01-31");
INSERT INTO crecimiento values(null,7,"5","2022-01-21");
INSERT INTO crecimiento values(null,7,"7","2022-01-31");
INSERT INTO crecimiento values(null,8,"25","2022-01-05");
INSERT INTO crecimiento values(null,8,"29","2022-02-05");
INSERT INTO crecimiento values(null,8,"30","2022-03-05");
INSERT INTO crecimiento values(null,9,"2","2022-02-05");
INSERT INTO crecimiento values(null,9,"5","2022-03-05");
INSERT INTO crecimiento values(null,10,"10","2022-02-18");
INSERT INTO crecimiento values(null,11,"10","2021-09-18");
INSERT INTO crecimiento values(null,11,"16","2021-12-18");
INSERT INTO crecimiento values(null,11,"25","2022-02-18");
