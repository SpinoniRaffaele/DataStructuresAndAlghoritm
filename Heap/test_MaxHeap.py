from unittest import TestCase

from MaxHeap import MaxHeap


class TestMaxHeap(TestCase):
    def test_insert(self):
        heap = MaxHeap()

        heap.insert(5)
        heap.insert(6)
        heap.insert(9)
        heap.insert(10)
        heap.insert(4)

        assert heap.get_items() == [10, 9, 5, 6, 4]

    def test_remove(self):
        heap = MaxHeap()

        heap.insert(5)
        heap.insert(6)
        heap.insert(9)
        heap.insert(10)
        heap.insert(4)

        root = heap.remove_max()

        assert root == 10
        assert heap.get_items() == [9, 6, 5, 4]

        second_root = heap.remove_max()

        assert second_root == 9
        assert heap.get_items()[0] == 6
