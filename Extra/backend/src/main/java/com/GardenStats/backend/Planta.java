package com.GardenStats.backend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="planta")

public class Planta {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID_planta;
	@Column
	private String Nombre;
	@Column
	private int Regar;
	@Column
	private int Luz;
	
	public int getId() {
		return ID_planta;
	}
	
	public void setID(int ID_planta) {
		this.ID_planta=ID_planta;
	}
	
	public String getNombre() {
		return Nombre;
	}
	
	public void setNombre(String Nombre) {
		this.Nombre=Nombre;
	}
	
	public int getRegar() {
		return Regar;
	}
	
	public void setRegar(int Regar) {
		this.Regar=Regar;
	}
	
	public int getLuz() {
		return Luz;
	}
	
	public void setLuz(int Luz) {
		this.Luz=Luz;
	}
	
}
