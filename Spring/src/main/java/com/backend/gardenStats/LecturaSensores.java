package com.backend.gardenStats;
import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "LecturaSensores")
public class LecturaSensores {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID_lectura;
	@Column
	private int ID_planta;
	@Column
	private String Temperatura;
	@Column
	private String Humedad_ambiente;
	@Column
	private String Humedad_suelo;
	@Column
	private String Luz;
	@Column
	private Date Fecha_lectura;
	
	LecturaSensores(){}
	
	LecturaSensores(int ID_lectura, int ID_planta, String Temperatura, String Humedad_ambiente, String Humedad_suelo, String Luz, Date Fecha_lectura)
	{
		this.ID_lectura = ID_lectura;
		this.ID_planta = ID_planta;
		this.Temperatura = Temperatura;
		this.Humedad_ambiente = Humedad_ambiente;
		this.Humedad_suelo = Humedad_suelo;
		this.Luz = Luz;
		this.Fecha_lectura = Fecha_lectura;
	}
	
	LecturaSensores(int ID_planta, String Temperatura, String Humedad_ambiente, String Humedad_suelo, String Luz, Date Fecha_lectura)
	{
		this.ID_planta = ID_planta;
		this.Temperatura = Temperatura;
		this.Humedad_ambiente = Humedad_ambiente;
		this.Humedad_suelo = Humedad_suelo;
		this.Luz = Luz;
		this.Fecha_lectura = Fecha_lectura;
	}

	public int getID_lectura() {
		return ID_lectura;
	}

	public void setID_lectura(int iD_lectura) {
		ID_lectura = iD_lectura;
	}

	public int getID_planta() {
		return ID_planta;
	}

	public void setID_planta(int iD_planta) {
		ID_planta = iD_planta;
	}

	public String getTemperatura() {
		return Temperatura;
	}

	public void setTemperatura(String temperatura) {
		Temperatura = temperatura;
	}

	public String getHumedad_ambiente() {
		return Humedad_ambiente;
	}

	public void setHumedad_ambiente(String humedad_ambiente) {
		Humedad_ambiente = humedad_ambiente;
	}

	public String getHumedad_suelo() {
		return Humedad_suelo;
	}

	public void setHumedad_suelo(String humedad_suelo) {
		Humedad_suelo = humedad_suelo;
	}

	public String getLuz() {
		return Luz;
	}

	public void setLuz(String luz) {
		Luz = luz;
	}

	public Date getFecha_lectura() {
		return Fecha_lectura;
	}

	public void setFecha_lectura(Date fecha_lectura) {
		Fecha_lectura = fecha_lectura;
	}
	
	
}
