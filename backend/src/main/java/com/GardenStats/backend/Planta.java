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
	private boolean Regar;
	@Column
	private boolean Luz;
	
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
	
	public boolean getRegar() {
		return Regar;
	}
	
	public void setRegar(boolean Regar) {
		this.Regar=Regar;
	}
	
	public boolean getLuz() {
		return Luz;
	}
	
	public void setLuz(boolean Luz) {
		this.Luz=Luz;
	}
	
}
