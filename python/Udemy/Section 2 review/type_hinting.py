# type_hinting

from typing import List # , Tuple, Set, etc...

# def list_avg(sequence: List) -> float:
#     return sum(sequence) / len(sequence)


# list_avg(123)

# class Book:
#     def __init__(self, name: str, pageCount: int):
#         self.name = name
#         self.pageCount = pageCount

class Book:
    pass

class BookShelf:
    def __init__(self, books: List[Book]):
        self.books =books
    
    def __str__(self) -> str:
        return f"Bookshelf with {len(self.books)} books."
bf = BookShelf(['asd',"hey"])
print(bf)