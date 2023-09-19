# class representing the Max-Heap data structure

class MaxHeap:
    def __init__(self):
        self.__size = 0
        self.__items = []

    def get_items(self):
        return self.__items

    def get_parent(self, position):
        return int(position / 2)

    def has_parent(self, position):
        return position > 0

    def has_left_child(self, position):
        return ((position * 2) + 1) < self.__size

    def has_right_child(self, position):
        return ((position * 2) + 2) < self.__size

    def get_left_child(self, position):
        return (position * 2) + 1

    def get_right_child(self, position):
        return (position * 2) + 2

    def get_higher_child_position(self, position):
        left = self.__items[self.get_left_child(position)]
        if not self.has_right_child(position):
            return self.get_left_child(position)
        right = self.__items[self.get_right_child(position)]
        if right >= left:
            return self.get_right_child(position)
        return self.get_left_child(position)

    def insert(self, value):
        self.__items.append(value)
        self.__size += 1
        self.heapify_up()

    def heapify_up(self):
        position = self.__size - 1
        while self.has_parent(position) and self.__items[position] > self.__items[self.get_parent(position)]:
            self.swap(position, self.get_parent(position))
            position = self.get_parent(position)

    def heapify_down(self):
        position = 0
        higher_child = self.get_higher_child_position(position)

        while self.has_left_child(position) and self.__items[position] < self.__items[higher_child]:
            self.swap(higher_child, position)
            position = higher_child
            if not self.has_left_child(position):
                return
            higher_child = self.get_higher_child_position(position)

    def swap(self, position, parent_position):
        temp = self.__items[position]
        self.__items[position] = self.__items[parent_position]
        self.__items[parent_position] = temp

    def remove_max(self):
        self.swap(0, self.__size - 1)
        result = self.__items.pop(self.__size - 1)
        self.__size -= 1
        self.heapify_down()

        return result

