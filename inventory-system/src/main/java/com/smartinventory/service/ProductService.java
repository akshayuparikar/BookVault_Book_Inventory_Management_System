package com.smartinventory.service;

import com.smartinventory.entity.Product;
import java.util.List;

public interface ProductService {
    Product save(Product product);
    List<Product> getAll();
}
