package com.klu.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Product;
import com.klu.model.User;
import com.klu.repository.ProductRepository;


@Service
public class ProductServiceImpl implements IProductService{
	
	@Autowired
	ProductRepository pr;

	@Override
	public List<Product> allProducts() {
		List<Product> products = pr.findAll(); 
		return products;
	}

	@Override
	public Product findOneProduct(String s) {
		Product p = pr.findByPid(s);
		return p;
	}

	@Override
	public int insertProduct(Product p) {
		// TODO Auto-generated method stub
		Integer id = pr.save(p).getId();
		return id;
	}

	@Override
	public List<Product> findAllByEmail(String email) {
		List<Product> al = pr.findAllByEmail(email);
		return al;
	}

	@Override
	public void deleteProduct(String pid) {
		Product p = pr.findByPid(pid);
//		System.out.println(p);
		pr.delete(p);
	}

	@Override
	public void deleteProductByid(Integer id) {
		Product p = pr.findProductById(id);
		pr.delete(p);
	}
}
