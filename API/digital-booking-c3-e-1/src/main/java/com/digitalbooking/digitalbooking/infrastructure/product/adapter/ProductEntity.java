package com.digitalbooking.digitalbooking.infrastructure.product.adapter;

import com.digitalbooking.digitalbooking.infrastructure.category.adapter.CategoryEntity;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name="product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String brand;
    private String state;
    private BigDecimal price;
    private String description;
    private String size;
    private String gender;
    private BigDecimal deposit;
    private String imageURL;
    private Boolean isDelete;
    private String color;
    private String material;
    @ManyToOne
    private CategoryEntity category;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "productEntity")
    private List<ImageProductEntity> imageProductEntity;
}
