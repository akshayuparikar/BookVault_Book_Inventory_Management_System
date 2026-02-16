## Smart Inventory System (BookVault)

## Overview

This is a Spring Boot + MySQL based inventory management system.
It supports user authentication, role-based access control, product
management, and sales tracking.

## Features

- User registration and login with email + password
- Secure password storage using BCrypt hashing
- Role-based access (ADMIN, USER)
- Add, update, and list products
- Track stock quantity and reorder levels
- Record sales transactions linked to products
- RESTful APIs for authentication, products, and sales

## Tech Stack

- Backend: Spring Boot 3, Spring Security, Spring Data JPA
- Database: MySQL
- Build Tool: Maven
- Language: Java 17

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/your-username/bookvault.git
   cd bookvault

2. Create a MySQL database:
   CREATE DATABASE bookvault;

3. Configure database in src/main/resources/application.properties:
   spring.datasource.url=jdbc:mysql://localhost:3306/bookvault
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true

4. Insert sample user with BCrypt password:
   Generate hash in a helper class:
     System.out.println(new BCryptPasswordEncoder().encode("admin123"));

   Insert into MySQL:
     INSERT INTO users (name, email, password, role)
     VALUES ('Admin User', 'admin@bookvault.com',
             '<paste_generated_hash_here>', 'ADMIN');

5. Build and run:
   mvn clean install
   mvn spring-boot:run

## API Endpoint

Authentication:
- POST /api/auth/register   -> Register new user
- POST /api/auth/login      -> Login with email + password

Products:
- POST /api/products        -> Add product
- GET /api/products         -> List all products

Sales:
- POST /api/sales           -> Record sale
- GET /api/sales            -> List all sales

## Example Requests

Register User:
POST /api/auth/register
{
  "name": "Test User",
  "email": "user@bookvault.com",
  "password": "user123",
  "role": "USER"
}

Login User:
POST /api/auth/login
{
  "email": "admin@bookvault.com",
  "password": "admin123"
}

## Future Enhancements

- JWT-based authentication
- Dashboard with analytics
- Email notifications for low stock

## Author

Developed by Akshay
