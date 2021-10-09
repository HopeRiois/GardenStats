package com.GardenStats.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge= 3600)
@RestController
@RequestMapping({"/planta"})
public class Controlador {
	@Autowired
	PlantaService service;
	
	public List<Planta>listar(){
		return service.listar();
	}
}
