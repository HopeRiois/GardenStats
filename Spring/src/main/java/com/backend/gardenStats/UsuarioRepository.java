package com.backend.gardenStats;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface UsuarioRepository extends Repository<Usuario, Integer> {
	List<Usuario>findAll();
	Usuario save(Usuario s);
	void delete(Usuario s);
}
