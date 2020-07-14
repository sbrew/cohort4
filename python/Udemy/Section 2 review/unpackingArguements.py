# unpacking arguements

def multiply(*args):
    print(args)
    print(*args)
    # double print to show access to tuples
    total = 1
    for arg in args:
        total = total * arg

    return total

print(multiply(1, 3, 5))

def add(x,y):
    return x+y

nums1 = [3,5]
print(add(*nums1))

nums2 = {"x": 15, "y":25}
print(add(nums2["x"],nums2["y"]))
print(add(**nums2))

def apply(*args, operator):
    if operator == "*":
        return multiply(*args)
    elif operator == "+":
        return sum(args)
    else:
        return "no valid operator"

print(apply(1,3,5,7, operator="+"))
print(apply(1,3,5, operator="*"))








