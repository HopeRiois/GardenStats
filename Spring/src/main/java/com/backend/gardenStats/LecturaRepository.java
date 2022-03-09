package com.backend.gardenStats;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface LecturaRepository extends Repository<LecturaSensores, Integer>{
	List<LecturaSensores>findAll();
	LecturaSensores save(LecturaSensores s);
	void delete(LecturaSensores s);
}
