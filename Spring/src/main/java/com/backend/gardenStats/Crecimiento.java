package com.backend.gardenStats;
import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="Crecimiento")
public class Crecimiento {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID_crecimiento;
	@Column
	private int ID_planta;
	@Column
	private String Registro;
	@Column
	private Date Fecha_muestra;
	
	public Crecimiento() {}
	
	public Crecimiento(int ID_crecimiento,int ID_planta, String Registro, Date Fecha_muestra)
	{
		this.ID_crecimiento = ID_crecimiento;
		this.ID_planta = ID_planta;
		this.Registro = Registro;
		this.Fecha_muestra = Fecha_muestra;
	}
	
	public Crecimiento(int ID_planta, String Registro, Date Fecha_muestra)
	{
		this.ID_planta = ID_planta;
		this.Registro = Registro;
		this.Fecha_muestra = Fecha_muestra;
	}

	public int getID_crecimiento() {
		return ID_crecimiento;
	}

	public void setID_crecimiento(int iD_crecimiento) {
		ID_crecimiento = iD_crecimiento;
	}

	public int getID_planta() {
		return ID_planta;
	}

	public void setID_planta(int iD_planta) {
		ID_planta = iD_planta;
	}

	public String getRegistro() {
		return Registro;
	}

	public void setRegistro(String registro) {
		Registro = registro;
	}

	public Date getFecha_muestra() {
		return Fecha_muestra;
	}

	public void setFecha_muestra(Date fecha_muestra) {
		Fecha_muestra = fecha_muestra;
	}
	
	
}
