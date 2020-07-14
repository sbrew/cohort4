# first_class_functions

from operator import itemgetter

# def divide(dividend, divisor):
#     if divisor == 0:
#         raise ZeroDivisionError("Divisor cannot be 0.")

#     return dividend / divisor

# def calculate(*values, operator):
#     return operator(*values)


# result = calculate(20,4, operator=divide)
# print(result)

def search(sequence, expected, finder):
    for elem in sequence:
        if finder(elem) == expected:
            return elem
        raise RuntimeError(f"Could not find and element with {expected}.")


friends = [
    {"name": "chuck", "age": "24"},
    {"name": "barry", "age": "53"},
    {"name": "dave", "age": "41"},
]


# def get_friend_name(friend):
#     return friend["name"]


# print(search(friends, "dave", get_friend_name))

print(search(friends, "barry", lambda friend: friend["name"]))
