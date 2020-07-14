# mutibility
a=[]
b=[]

a.append(35)

print(id(a))
print(id(b))

a= "hello"
b=a

print(id(a))
print(id(b))

a += "world"
print((a))
print((b))