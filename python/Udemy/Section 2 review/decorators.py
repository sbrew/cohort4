# decorators

user = {"username": "jose", "access_level": "guest"}
# user = {"username": "jose", "access_level": "admin"}

def get_admin_password():
    return "1234"

# def secure_get_admin():
#     if user["access_level"]== "admin":
#         return "1234"

# print(secure_get_admin())

def make_secure(func):
    def secure_function():
        if user["access_level"] == "admin":
            return func()

    return secure_function

get_admin_password = make_secure(get_admin_password)


print(get_admin_password())



