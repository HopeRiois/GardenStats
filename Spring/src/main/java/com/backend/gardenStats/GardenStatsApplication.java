package com.backend.gardenStats;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class GardenStatsApplication {
	@Autowired 
	IService service;
	
	public static void main(String[] args) {
		SpringApplication.run(GardenStatsApplication.class, args);
	}
	
	@GetMapping("/getAllU")
	public List<Usuario> Listar()
	{
		return service.listarU();
	}
	
	@GetMapping("/getAllP")
	public List<Planta> ListarP()
	{
		return service.listarP();
	}
	
	@GetMapping("/getAllC")
	public List<Crecimiento> ListarC()
	{
		return service.listarC();
	}
	
	@GetMapping("/getAllL")
	public List<LecturaSensores> ListarL()
	{
		return service.listarL();
	}
	
	@GetMapping("/getOneL")
	public LecturaSensores ObtenerUnoL(@RequestParam(value = "id") int id) {
		LecturaSensores regresar = service.obtenerUnoL(id);
		return regresar;
	}
	
	@GetMapping("/getOneU")
	public Usuario ObtenerUno(@RequestParam(value = "id") int id) {
		Usuario regresar = service.obtenerUnoU(id);
		return regresar;
	}
	
	@GetMapping("/getOneP")
	public Planta ObtenerUnoP(@RequestParam(value = "id") int id) {
		Planta regresar = service.obtenerUnoP(id);
		return regresar;
	}
	
	@GetMapping("/getOneC")
	public Crecimiento ObtenerUnoC(@RequestParam(value = "id") int id) {
		Crecimiento regresar = service.obtenerUnoC(id);
		return regresar;
	}

	 @GetMapping("/addU")
	public Usuario Agregar(@RequestParam(value = "Nombres") String Nombres, 
			@RequestParam(value = "Apellidos") String Apellido,
			@RequestParam(value = "us") String us,
			@RequestParam(value = "contraseña") String contraseña,
			@RequestParam(value = "correo") String correo)
	{
		Usuario u = new Usuario(Nombres, Apellido, us, contraseña, correo);
		
		return service.agregarU(u);
	}
	 
	 @GetMapping("/addP")
		public Planta AgregarP(@RequestParam(value = "ID_usuario") int ID_usuario, 
				@RequestParam(value = "Nombre") String Nombre,
				@RequestParam(value = "Regar") boolean Regar,
				@RequestParam(value = "Luz") boolean Luz)
		{
			Planta u = new Planta(ID_usuario, Nombre, Regar, Luz);
			
			return service.agregarP(u);
		}
	 
	 @GetMapping("/addC")
		public Crecimiento AgregarC(@RequestParam(value = "ID_planta") int ID_planta, 
				@RequestParam(value = "Registro") String Registro,
				@RequestParam(value = "Fecha_muestra") Date Fecha_muestra)
		{
			Crecimiento u = new Crecimiento(ID_planta,Registro,Fecha_muestra);
			
			return service.agregarC(u);
		}
	 
	@GetMapping("/deleteU")
	public Usuario Eliminar(@RequestParam(value="id")int id) {
		
		return service.eliminarU(id);
	}
	
	@GetMapping("/deleteP")
	public Planta EliminarP(@RequestParam(value="id")int id) {
		
		return service.eliminarP(id);
	}
	
	@GetMapping("/deleteC")
	public Crecimiento EliminarC(@RequestParam(value="id")int id) {
		
		return service.eliminarC(id);
	}

	@GetMapping("/editU")
	public Usuario Editar(@RequestParam(value="ID_usuario")int ID_usuario, 
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
	
	@GetMapping("/editP")
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

	@GetMapping("/editC")
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
