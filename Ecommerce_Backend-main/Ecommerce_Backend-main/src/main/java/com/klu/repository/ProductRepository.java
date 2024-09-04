package com.klu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	Product findByPid(String s);
	List<Product> findAllByEmail(String email);
	Product findProductById(Integer id);
}
