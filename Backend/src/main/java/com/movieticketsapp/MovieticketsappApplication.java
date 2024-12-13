package com.movieticketsapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(scanBasePackages={
		"com.example.something", "com.example.application"})
public class MovieticketsappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieticketsappApplication.class, args);
	}

}
