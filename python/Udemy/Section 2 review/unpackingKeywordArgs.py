# unpackingKeywordArgs
def named(**kwargs):
    print(kwargs)

details = {"name": "bob", "age":25}

named(**details)

def print_nicely(**kwargs):
    named(**kwargs)
    for arg, value in kwargs.items():
        print(f"{arg}: {value}")

print_nicely(**details)
print_nicely(name="bob", age=25)