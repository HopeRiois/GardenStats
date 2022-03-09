package com.backend.gardenStats;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImplementS implements IService {
	@Autowired 
	private UsuarioRepository repo;
	
	//metodo usuario
	@Override
	public List<Usuario> listarU() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Usuario obtenerUnoU(int id) {
		// TODO Auto-generated method stub
		List<Usuario> l= repo.findAll();
		Usuario enc = null;
		for (Usuario lib: l) {
			if(lib.getID_usuario()==id) {
				enc=lib;
			}
		}
		
		return enc;
	}

	@Override
	public Usuario agregarU(Usuario l) {
		// TODO Auto-generated method stub
		return repo.save(l);
	}

	@Override
	public Usuario editarU(Usuario l) {
		// TODO Auto-generated method stub
		return repo.save(l);
	}

	@Override
	public Usuario eliminarU(int id) {
		// TODO Auto-generated method stub
		Usuario eli = obtenerUnoU(id);
		if(eli != null) {
			repo.delete(eli);
		}
		return eli;
	}

	//metodos planta
	@Autowired
	private PlantaRepository repop;
	
	@Override
	public List<Planta> listarP() {
		// TODO Auto-generated method stub
		return repop.findAll();
	}

	@Override
	public Planta obtenerUnoP(int id) {
		// TODO Auto-generated method stub
		List<Planta> l= repop.findAll();
		Planta enc = null;
		for (Planta lib: l) {
			if(lib.getID_planta()==id) {
				enc=lib;
			}
		}
		
		return enc;
	}

	@Override
	public Planta agregarP(Planta l) {
		// TODO Auto-generated method stub
		return repop.save(l);
	}

	@Override
	public Planta editarP(Planta l) {
		// TODO Auto-generated method stub
		return repop.save(l);
	}

	@Override
	public Planta eliminarP(int id) {
		// TODO Auto-generated method stub
		Planta eli = obtenerUnoP(id);
		if(eli != null) {
			repop.delete(eli);
		}
		return eli;
	}

	// metodos crecimiento
	@Autowired
	private CrecimientoRepository repoc;
	
	@Override
	public List<Crecimiento> listarC() {
		// TODO Auto-generated method stub
		return repoc.findAll();
	}

	@Override
	public Crecimiento obtenerUnoC(int id) {
		// TODO Auto-generated method stub
		List<Crecimiento> l= repoc.findAll();
		Crecimiento enc = null;
		for (Crecimiento lib: l) {
			if(lib.getID_crecimiento()==id) {
				enc=lib;
			}
		}
		return enc;
	}

	@Override
	public Crecimiento agregarC(Crecimiento l) {
		// TODO Auto-generated method stub
		return repoc.save(l);
	}

	@Override
	public Crecimiento editarC(Crecimiento l) {
		// TODO Auto-generated method stub
		return repoc.save(l);
	}

	@Override
	public Crecimiento eliminarC(int id) {
		// TODO Auto-generated method stub
		Crecimiento eli = obtenerUnoC(id);
		if(eli != null) {
			repoc.delete(eli);
		}
		return eli;
	}

	//metodos LecturaSensores
	@Autowired
	private LecturaRepository repol;
	
	@Override
	public List<LecturaSensores> listarL() {
		// TODO Auto-generated method stub
		return repol.findAll();
	}

	@Override
	public LecturaSensores obtenerUnoL(int id) {
		// TODO Auto-generated method stub
		List<LecturaSensores> l= repol.findAll();
		LecturaSensores enc = null;
		for (LecturaSensores lib: l) {
			if(lib.getID_lectura()==id) {
				enc=lib;
			}
		}
		return enc;
	}

}
