# pythonOOP

class Student:
    def __init__(self,name,grades):
        self.name = name
        self.grades = grades

    def average(self):
        return sum(self.grades)/len(self.grades)


student = Student("gary", (89, 90, 93, 78, 90))
print(student.name)

print(student.average())


# print(average(student["grades"]))
