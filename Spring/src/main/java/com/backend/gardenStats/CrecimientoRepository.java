package com.backend.gardenStats;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface CrecimientoRepository extends Repository<Crecimiento, Integer>{
	List<Crecimiento>findAll();
	Crecimiento save(Crecimiento s);
	void delete(Crecimiento s);
}
	