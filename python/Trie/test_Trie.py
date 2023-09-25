from unittest import TestCase
from Trie import Trie


class TestTrie(TestCase):
    def test_insert(self):
        trie = Trie()
        trie.insert(list("some"))
        trie.insert(list("so"))
        trie.insert(list("other"))
        trie.print_trie()
        assert trie.search(list("so")) is True
        assert trie.search(list("other")) is True
        print("deletion")
        trie.delete(list("other"))
        assert trie.search(list("other")) is False
        trie.print_trie()