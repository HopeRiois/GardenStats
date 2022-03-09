package com.backend.gardenStats;

import java.util.List;

public interface IService {
	//metodos Usuario
	List<Usuario>listarU();
	Usuario obtenerUnoU(int id);
	Usuario agregarU(Usuario l);
	Usuario editarU(Usuario l);
	Usuario eliminarU(int id);
	
	//metodos planta
	List<Planta>listarP();
	Planta obtenerUnoP(int id);
	Planta agregarP(Planta l);
	Planta editarP(Planta l);
	Planta eliminarP(int id);
	
	//metodos Crecimiento
	List<Crecimiento>listarC();
	Crecimiento obtenerUnoC(int id);
	Crecimiento agregarC(Crecimiento l);
	Crecimiento editarC(Crecimiento l);
	Crecimiento eliminarC(int id);
	
	//metodos LecturaSensores
	List<LecturaSensores>listarL();
	LecturaSensores obtenerUnoL(int id);
}
