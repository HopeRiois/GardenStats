package com.backend.gardenStats;
import javax.persistence.*;

@Entity
@Table(name = "Usuario")
public class Usuario 
{
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID_usuario;
	@Column 
	private String Nombres;
	@Column 
	private String Apellidos;
	@Column 
	private String us;
	@Column 
	private String contraseña;
	@Column 
	private String correo;
	
	public Usuario() {}
	
	public Usuario(int ID_usuario,String Nombres, String Apellidos, String us, String contraseña, String correo)
	{
		this.ID_usuario = ID_usuario;
		this.Apellidos = Apellidos;
		this.Nombres = Nombres;
		this.us = us;
		this.contraseña = contraseña;
		this.correo = correo;
	}
	
	public Usuario(String Nombres,String Apellidos, String us, String contraseña, String correo)
	{
		this.Nombres = Nombres;
		this.Apellidos = Apellidos;
		this.us = us;
		this.contraseña = contraseña;
		this.correo = correo;
	}

	public int getID_usuario() {
		return ID_usuario;
	}

	public void setID_usuario(int iD_usuario) {
		ID_usuario = iD_usuario;
	}

	public String getNombres() {
		return Nombres;
	}

	public void setNombres(String nombres) {
		Nombres = nombres;
	}

	public String getApellidos() {
		return Apellidos;
	}

	public void setApellidos(String apellidos) {
		Apellidos = apellidos;
	}

	public String getUs() {
		return us;
	}

	public void setUs(String us) {
		this.us = us;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}
	
	
}
