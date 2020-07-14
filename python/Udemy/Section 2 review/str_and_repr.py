# str_and_repr

class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"hello im '{self.name}' and im {self.age} yearsold"

    def __repr__(self):
        return f"<Persons('{self.name}',{self.age})>"




bob = Person("bob", 35)
print(bob.__repr__())

class Store:
    def __init__(self,name):
        self.name=name
        self.items=[]
        # Then, initialise 'self.name' to be the argument, and 'self.items' to be an empty list.
    
    def add_item(self, name, price):
        # Create a dictionary with keys name and price, and append that to self.items.
        item ={"name":name, "price":price}
        self.items.append(item)
    def stock_price(self):
        # Add together all item prices in self.items and return the total.
        return sum([item['price'] for item in self.items])