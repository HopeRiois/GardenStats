package com.backend.gardenStats;
import javax.persistence.*;

@Entity
@Table(name = "Planta")
public class Planta {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID_planta;
	@Column
	private int ID_usuario;
	@Column
	private String Nombre;
	@Column
	private boolean Regar;
	@Column
	private boolean Luz;
	
	public Planta() {}
	
	public Planta(int ID_planta,int ID_usuario, String Nombre, boolean Regar, boolean Luz)
	{
		this.ID_planta = ID_planta;
		this.ID_usuario = ID_usuario;
		this.Nombre = Nombre;
		this.Regar = Regar;
		this.Luz = Luz;
	}
	
	public Planta(int ID_usuario, String Nombre, boolean Regar, boolean Luz)
	{
		this.ID_usuario = ID_usuario;
		this.Nombre = Nombre;
		this.Regar = Regar;
		this.Luz = Luz;
	}

	public int getID_planta() {
		return ID_planta;
	}

	public void setID_planta(int iD_planta) {
		ID_planta = iD_planta;
	}

	public int getID_usuario() {
		return ID_usuario;
	}

	public void setID_usuario(int iD_usuario) {
		ID_usuario = iD_usuario;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public boolean isRegar() {
		return Regar;
	}

	public void setRegar(boolean regar) {
		Regar = regar;
	}

	public boolean isLuz() {
		return Luz;
	}

	public void setLuz(boolean luz) {
		Luz = luz;
	}

	
}
