# function arguements and paramters

def hello(name, surname):
    print(f"hello, {name} {surname}")

hello(surname="steve", name="stevenson")

def divide(dividend, divisor):
    if divisor != 0:
        print(dividend/divisor)
    else:
        print("you just divided by 0!!!")

divide(10,0)