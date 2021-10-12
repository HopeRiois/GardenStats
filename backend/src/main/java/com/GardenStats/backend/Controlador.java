package com.GardenStats.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@CrossOrigin(origins = "http://localhost:4200", maxAge= 3600)

@RestController
@RequestMapping({"/planta"})
public class Controlador {
	@Autowired
	PlantaService service;
	
	@GetMapping
	public List<Planta>listar(){
		return service.listar();
	}

	@Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer(){
            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/**")
                    .allowedMethods("GET","POST","PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowedOrigins("*");
            }
        };
    }
}


