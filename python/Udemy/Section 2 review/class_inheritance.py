# class_inheritance
class Device:
    def __init__(self, name, connected_by):
        self.name = name
        self.connected_by = connected_by
        self.connected = True

    # !r calls repr method

    def __str__(self):
        return f"Device {self.name!r} ({self.connected_by})"

    def disconnect(self):
        self.connected = False
        print("Disconnected.")

# printer = Device("printer","usb")
# print(printer)
# printer.disconnect()

# super gets parent class


class Printer(Device):
    def __init__(self, name, connected_by, capacity):
        super().__init__(name, connected_by)
        self.capacity = capacity
        self.remaining_pages = capacity

    def __str__(self):
        return f"{super().__str__()} ({self.remaining_pages} pages remaining)"

    def print(self, pages):
        if not self.connected:
            print("your printer is not connected!")
            return
        print(f"printing {pages} pages")
        self.remaining_pages -= pages

printer = Printer("printer","usb",500)
printer.print(20)
print(printer)
printer.disconnect()