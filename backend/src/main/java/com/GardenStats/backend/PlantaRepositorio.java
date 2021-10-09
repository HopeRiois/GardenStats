package com.GardenStats.backend;

import org.springframework.data.repository.Repository;
import java.util.List;

public interface PlantaRepositorio extends Repository<Planta, Integer>{
	List<Planta>findAll();
	Planta save(Planta p);
	void delete(Planta p);
}
