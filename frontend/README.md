# Employee Management System

A full-stack Employee Management System built with **React**, **FastAPI**, and **PostgreSQL**. This project was developed to practice modern **DevOps workflows**, including Docker, Docker Compose, CI/CD, monitoring, and cloud deployment.

---

## Features

- Add Employee
- View Employees
- Update Employee
- Delete Employee
- PostgreSQL Database
- REST API with FastAPI
- Responsive React Frontend
- Dockerized Frontend & Backend
- Docker Compose for Multi-Container Deployment

---

## Tech Stack

### Frontend
- React
- Vite
- React Router
- CSS

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose
- Git & GitHub

---

## Project Structure

```
employee-management-system/
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── .dockerignore
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yml
└── README.md
```

---

## Architecture

```
                Browser
                    │
                    ▼
          React Frontend (Nginx)
                    │
          HTTP REST API Requests
                    │
                    ▼
             FastAPI Backend
                    │
             SQLAlchemy ORM
                    │
                    ▼
            PostgreSQL Database
```

---

## Run Locally

### Clone Repository

```bash
git clone https://github.com/your-username/employee-management-system.git

cd employee-management-system
```

---

### Run using Docker Compose

```bash
docker compose up --build -d
```

---

### Frontend

```
http://localhost:82
```

### Backend

```
http://localhost:8000
```

### Swagger Documentation

```
http://localhost:8000/docs
```

---

## Docker

This project contains:

- Frontend Dockerfile
- Backend Dockerfile
- Docker Compose
- Nginx Configuration

Run:

```bash
docker compose up --build -d
```

Stop:

```bash
docker compose down
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /employees | Get all employees |
| POST | /employees | Add employee |
| PUT | /employees/{id} | Update employee |
| DELETE | /employees/{id} | Delete employee |

---

## Future DevOps Enhancements

- GitHub Actions CI
- Jenkins Pipeline
- Docker Hub
- Nginx Reverse Proxy
- AWS EC2 Deployment
- Terraform
- Ansible
- Kubernetes
- Prometheus
- Grafana

---

## Learning Objectives

This project was created to practice:

- Docker
- Docker Compose
- PostgreSQL
- DevOps Fundamentals
- CI/CD
- Containerization

---

## Author

**Sufiyaan Hussain**

DevOps Enthusiast | Software Engineering Student

GitHub:
https://github.com/sufiyaan14

LinkedIn:
https://linkedin.com/in/sufiyaan-hussain