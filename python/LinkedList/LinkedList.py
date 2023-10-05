class LinkedList:

    def __init__(self):
        self.__list = None

    def insert_top(self, elem):
        self.__list = LinkedListNode(elem, self.__list)

    def insert_bottom(self, elem):
        temp = self.__list
        if temp is not None:
            while temp.next is not None:
                temp = temp.next
            temp.next = LinkedListNode(elem, None)
        else:
            self.__list = LinkedListNode(elem, None)

    def print_list(self):
        temp = self.__list
        print("[")
        while temp is not None:
            print(temp.elem)
            temp = temp.next
        print("]")

    def delete_top(self):
        if self.__list is not None:
            self.__list = self.__list.next

    def delete_bottom(self):
        temp = self.__list
        if temp is not None:
            if temp.next is None:
                self.__list = None
                return
            while temp.next.next is not None:
                temp = temp.next
            temp.next = None

    def find(self, elem):
        temp = self.__list
        while temp is not None:
            if temp.elem is elem:
                return True
        return False


class LinkedListNode:

    def __init__(self, elem, next_):
        self.elem = elem
        self.next = next_
