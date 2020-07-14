# mutibility_default_params
from typing import List, Optional


class Student:
    # def __init__(self, name: str, grades: List[int] = []): #This is bad never make a param into a mutable value by defaults
    def __init__(self, name: str, grades: Optional[List[int]] = None):
        self.name = name
        self.grades = grades or []

    def take_exam(self, result: int):
        self.grades.append(result)
    
bob= Student("bob")
gary=Student("gary")
bob.take_exam(90)
print(bob.grades)
print(gary.grades)