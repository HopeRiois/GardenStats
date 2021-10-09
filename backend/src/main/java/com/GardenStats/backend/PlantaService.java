package com.GardenStats.backend;

import java.util.List;

public interface PlantaService {
	List<Planta>listar();
	Planta listarId(int ID_planta);
	Planta add(Planta p);
	Planta edit(Planta p);
	Planta delete(int ID_planta);
}
