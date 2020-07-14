# classAndStatic_methods
class ClassTest:

    def instance_method(self):
        print(f"called instance_method of {self}")

    @classmethod
    def class_method(cls):
        print(f"called class_method of {cls}")

    @staticmethod
    def static_method():
        print("called static_method.")

# test=ClassTest()
# test.instance_method()

# ClassTest.class_method()

# ClassTest.static_method()


class Book:
    TYPES = ("hardcover", "paperback")

    def __init__(self, name, booktype, weight):
        self.name = name
        self.booktype = booktype
        self.weight = weight

    def __repr__(self):
        return f"<Book {self.name}, {self.booktype}, weighing {self.weight}>"

    @classmethod
    def hardcover(cls, name, weight):
        return Book(name, Book.TYPES[0], weight+100)

    @classmethod
    def paperback(cls, name, weight):
        return cls(name, cls.TYPES[1], weight)


book = Book("harry", "hard", 1500)

book2 = Book.hardcover("harry2", 1500)

book3 = book.paperback('h3',600)

print(book)
print(book2)

print(book3)

class Store:
    def __init__(self, name):
        self.name = name
        self.items = []

    def add_item(self, name, price):
        self.items.append({
            'name': name,
            'price': price
        })

    def stock_price(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total

    @classmethod
    def franchise(cls, store):
        # Return another store, with the same name as the argument's name, plus " - franchise"
        new_store = Store(store.name + " - franchise")
        return new_store

    @staticmethod
    def store_details(store):
        # Return a string representing the argument
        # It should be in the format 'NAME, total stock price: TOTAL'
        return '{}, total stock price: {}'.format(store.name, int(store.stock_price()))
