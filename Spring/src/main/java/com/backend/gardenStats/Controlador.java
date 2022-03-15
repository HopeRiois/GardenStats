package com.backend.gardenStats;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/base"})
public class Controlador {
	@Autowired 
	IService service;
	
	public static void main(String[] args) {
		SpringApplication.run(GardenStatsApplication.class, args);
	}
	
	public List<Usuario> ListarU()
	{
		return service.listarU();
	}
	
	public List<Planta> ListarP()
	{
		return service.listarP();
	}
	
	public List<Crecimiento> ListarC()
	{
		return service.listarC();
	}
	
	public List<LecturaSensores> ListarL()
	{
		return service.listarL();
	}
	
	public LecturaSensores ObtenerUnoL(@RequestParam(value = "id") int id) {
		LecturaSensores regresar = service.obtenerUnoL(id);
		return regresar;
	}
	
	public Usuario ObtenerUnoU(@RequestParam(value = "id") int id) {
		Usuario regresar = service.obtenerUnoU(id);
		return regresar;
	}
	
	public Planta ObtenerUnoP(@RequestParam(value = "id") int id) {
		Planta regresar = service.obtenerUnoP(id);
		return regresar;
	}
	
	public Crecimiento ObtenerUnoC(@RequestParam(value = "id") int id) {
		Crecimiento regresar = service.obtenerUnoC(id);
		return regresar;
	}

	public Usuario AgregarU(@RequestParam(value = "Nombres") String Nombres, 
			@RequestParam(value = "Apellidos") String Apellido,
			@RequestParam(value = "us") String us,
			@RequestParam(value = "contraseña") String contraseña,
			@RequestParam(value = "correo") String correo)
	{
		Usuario u = new Usuario(Nombres, Apellido, us, contraseña, correo);
		
		return service.agregarU(u);
	}
	 
		public Planta AgregarP(@RequestParam(value = "ID_usuario") int ID_usuario, 
				@RequestParam(value = "Nombre") String Nombre,
				@RequestParam(value = "Regar") boolean Regar,
				@RequestParam(value = "Luz") boolean Luz)
		{
			Planta u = new Planta(ID_usuario, Nombre, Regar, Luz);
			
			return service.agregarP(u);
		}
	 
		public Crecimiento AgregarC(@RequestParam(value = "ID_planta") int ID_planta, 
				@RequestParam(value = "Registro") String Registro,
				@RequestParam(value = "Fecha_muestra") Date Fecha_muestra)
		{
			Crecimiento u = new Crecimiento(ID_planta,Registro,Fecha_muestra);
			
			return service.agregarC(u);
		}
	 
	public Usuario EliminarU(@RequestParam(value="id")int id) {
		
		return service.eliminarU(id);
	}
	
	public Planta EliminarP(@RequestParam(value="id")int id) {
		
		return service.eliminarP(id);
	}
	
	public Crecimiento EliminarC(@RequestParam(value="id")int id) {
		
		return service.eliminarC(id);
	}

	public Usuario EditarU(@RequestParam(value="ID_usuario")int ID_usuario, 
			@RequestParam(value = "Nombres") String Nombres, 
			@RequestParam(value = "Apellidos") String Apellido,
			@RequestParam(value = "us") String us,
			@RequestParam(value = "contraseña") String contraseña,
			@RequestParam(value = "correo") String correo) {
		Usuario regresar = service.obtenerUnoU(ID_usuario);
		
		if(regresar != null) {
			regresar.setNombres(Nombres);
			regresar.setApellidos(Apellido);
			regresar.setUs(us);
			regresar.setContraseña(contraseña);
			regresar.setCorreo(correo);
			service.editarU(regresar);
		}
		
		return regresar;
	}
	
	public Planta EditarP(@RequestParam(value="ID_planta")int ID_planta, 
			@RequestParam(value = "ID_usuario") int ID_usuario, 
			@RequestParam(value = "Nombre") String Nombre,
			@RequestParam(value = "Regar") boolean Regar,
			@RequestParam(value = "Luz") boolean Luz) {
		Planta regresar = service.obtenerUnoP(ID_planta);
		
		if(regresar != null) {
			regresar.setID_usuario(ID_usuario);
			regresar.setNombre(Nombre);
			regresar.setLuz(Luz);
			regresar.setRegar(Regar);
			service.editarP(regresar);
		}
		
		return regresar;
	}

	public Crecimiento EditarC(@RequestParam(value="ID_crecimiento")int ID_crecimiento, 
			@RequestParam(value = "ID_planta") int ID_planta, 
			@RequestParam(value = "Registro") String Registro,
			@RequestParam(value = "Fecha_muestra") Date Fecha_muestra) {
		Crecimiento regresar = service.obtenerUnoC(ID_planta);
		
		if(regresar != null) {
			regresar.setID_crecimiento(ID_crecimiento);
			regresar.setID_planta(ID_planta);
			regresar.setRegistro(Registro);
			regresar.setFecha_muestra(Fecha_muestra);
			service.editarC(regresar);
		}
		
		return regresar;
	}
}
