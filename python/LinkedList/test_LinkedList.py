from unittest import TestCase
from LinkedList import LinkedList


class TestLinkedList(TestCase):

    def test_linked_list(self):
        list = LinkedList()
        list.insert_top(13)
        list.insert_top(14)
        list.insert_bottom(2)
        list.print_list()
        list.delete_top()
        list.delete_bottom()
        list.print_list()
        assert list.find(13) is True
        list.delete_bottom()
        list.insert_bottom(1)
        list.print_list()
        assert list.find(1) is True
