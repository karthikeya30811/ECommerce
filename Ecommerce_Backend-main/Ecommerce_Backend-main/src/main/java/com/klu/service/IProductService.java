package com.klu.service;

import java.util.List;

import com.klu.model.Product;

public interface IProductService {
	public List<Product> allProducts();
	public Product findOneProduct(String s);
	public int insertProduct(Product p);
	public List<Product> findAllByEmail(String email);
	public void deleteProduct(String pid);
	public void deleteProductByid(Integer id);
}
