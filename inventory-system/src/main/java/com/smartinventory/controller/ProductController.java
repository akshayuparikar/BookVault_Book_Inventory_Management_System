package com.smartinventory.controller;

import com.smartinventory.entity.Product;
import com.smartinventory.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public Product add(@RequestBody Product product) {
        return service.save(product);
    }

    @GetMapping
    public List<Product> all() {
        return service.getAll();
    }
}
