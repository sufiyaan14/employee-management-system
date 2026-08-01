from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import Employee, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:82",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EmployeeCreate(BaseModel):
    name: str
    email: str
    department: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {"message": "Employee Management API Running Successfully"}


@app.get("/employees")
def get_employees(db: Session = Depends(get_db)):
    return db.query(Employee).all()


@app.post("/employees")
def add_employee(employee: EmployeeCreate, db: Session = Depends(get_db)):

    new_employee = Employee(
        name=employee.name,
        email=employee.email,
        department=employee.department
    )

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return new_employee


@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):

    employee = db.query(Employee).filter(Employee.id == employee_id).first()

    if employee:
        db.delete(employee)
        db.commit()

    return {"message": "Employee Deleted Successfully"}

@app.put("/employees/{employee_id}")
def update_employee(
    employee_id: int,
    updated_employee: EmployeeCreate,
    db: Session = Depends(get_db),
):

    employee = db.query(Employee).filter(Employee.id == employee_id).first()

    if not employee:
        return {"message": "Employee Not Found"}

    employee.name = updated_employee.name
    employee.email = updated_employee.email
    employee.department = updated_employee.department

    db.commit()
    db.refresh(employee)

    return employee