package com.GardenStats.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlantaServiceImp implements PlantaService{
	@Autowired
	private PlantaRepositorio repositorio;
	
	@Override
	public List<Planta> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Planta listarId(int ID_planta) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planta add(Planta p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planta edit(Planta p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planta delete(int ID_planta) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
