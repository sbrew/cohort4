# errors

# def divide(dividend, divisor):
#     if divisor == 0:
#         print("divisor cannot be 0.")
#         return

#     return dividend / divisor

# grades = [78,99,85,100]

# print("welcome to the average grade program.")
# average = divide(sum(grades),len(grades))

# print(f"the avg grade is {average}")


def divide(dividend, divisor):
    if divisor == 0:
        raise ZeroDivisionError("divisor cannot be 0.")
        
    return dividend / divisor

grades = []

print("welcome to the average grade program.")
try:
    average = divide(sum(grades),len(grades))
except ZeroDivisionError as e:
    # print(e)
    print("there are no grades in your list yet")

    # can have multiple except lines for multiple errors
else:
    print(f"the avg grade is {average}")
finally:
    print("thank you")

