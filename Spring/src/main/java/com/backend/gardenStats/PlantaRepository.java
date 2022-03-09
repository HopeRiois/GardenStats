package com.backend.gardenStats;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PlantaRepository extends Repository<Planta, Integer>{
	List<Planta>findAll();
	Planta save(Planta s);
	void delete(Planta s);
}
