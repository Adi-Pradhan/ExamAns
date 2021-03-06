package com.zensar.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.zensar.bean.Product;
import com.zensar.service.ProductService;

@RestController
public class ProductController {
	@Autowired
	ProductService service;
	
	@PostMapping(value="/add")
	public Product f1(@RequestBody Product product) {
		return service.addProduct(product);
	}
	
	@GetMapping(value="/getAll")
	public List<Product> f3(){
		return service.getAllProducts();
	}
	@GetMapping(value = "/fetchpro/{Pid}")
	public Product f1(@PathVariable(name="Pid") int id) {
		
		return service.findProduct(id);
	}
	
	@PutMapping("/update")
	public Product f4(@RequestBody Product product) {
		return service.upadateProduct(product);
	}
	@DeleteMapping("/delete/{pid}")
	public boolean deletePro(@PathVariable(name="pid") int id) {
		return this.service.deleteProduct(id);
	}
}
