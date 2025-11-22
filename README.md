# User CRUD Application

[![Java](https://img.shields.io/badge/Java-17-blue?logo=java)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/SpringBoot-3.2.2-brightgreen?logo=spring)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Axios](https://img.shields.io/badge/Axios-1.4.0-yellow)](https://axios-http.com/)

A full-stack CRUD application built with **Spring Boot** for the backend and **React** for the frontend.  
Users can be created, viewed, updated, and deleted via a simple web interface.

---

## Features

- **Backend (Spring Boot)**
  - REST API for users
  - Validation for email and age
  - Supports **MySQL** or **MongoDB**
  - Easy configuration via `application.properties`

- **Frontend (React + Axios)**
  - User list in a table
  - Add, edit, delete users
  - Responsive forms for input
  - Communicates with Spring Boot API

---

## Screenshots

![User List](<img width="1268" height="652" alt="Screenshot 2025-11-22 145456" src="https://github.com/user-attachments/assets/48a26899-4e7d-4abe-bcc7-d47d882ed4d3" />
) 

---

## Technologies Used

- **Backend:** Java 17, Spring Boot 3.2.2, Maven, MySQL / MongoDB
- **Frontend:** React 18, Axios
- **Database:** MySQL or MongoDB

---

## Notes
Frontend communicates with backend at http://localhost:8090.

Switching between MySQL and MongoDB is simple via dependencies and application.properties.

Axios handles all HTTP requests between React and Spring Boot.
