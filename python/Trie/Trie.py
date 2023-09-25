# class representing the trie datastructure
NUM_OF_LETTER = 26  # length of the lowercase letter of the english alphabet


class Trie:
    def __init__(self):
        self.num_of_word = 0
        self.children = []
        for i in range(NUM_OF_LETTER):
            self.children.append(None)

    @staticmethod
    def _map_char_to_int(elem):
        return ord(elem) - ord('a')

    @staticmethod
    def _is_leaf(node):
        for child in node.children:
            if child is not None:
                return False
        return True

    def _print_trie(self, depth):
        for index, child in enumerate(self.children):
            if child is not None:
                print(chr(index + ord('a')) + " " + str(child.num_of_word))
                child._print_trie(depth + 1)

    def _clean_up(self, elem, subtrie, index):
        next_node = subtrie.children[self._map_char_to_int(elem[index])]
        if not self._is_leaf(next_node):
            self._clean_up(elem, next_node, index + 1)
        subtrie.children[self._map_char_to_int(elem[index])] = None

    def print_trie(self):
        self._print_trie(0)

    def insert(self, elem):
        i = 0
        trie = self
        while i < len(elem):
            if trie.children[self._map_char_to_int(elem[i])] is None:
                trie.children[self._map_char_to_int(elem[i])] = Trie()
            trie = trie.children[self._map_char_to_int(elem[i])]
            i += 1
        trie.num_of_word += 1

    def simple_delete(self, elem):
        i = 0
        trie = self
        while i < len(elem):
            if trie.children[self._map_char_to_int(elem[i])] is None:
                return False
            trie = trie.children[self._map_char_to_int(elem[i])]
            i += 1
        if trie.num_of_word > 0:
            trie.num_of_word -= 1
            return True
        return False

    def delete(self, elem):
        i = 0
        trie = self
        bigger_prefix_index = 0
        bigger_prefix_subtrie = self
        while i < len(elem):
            if trie.children[self._map_char_to_int(elem[i])] is None:
                return False
            if trie.num_of_word > 0:
                bigger_prefix_subtrie = trie
                bigger_prefix_index = i
            trie = trie.children[self._map_char_to_int(elem[i])]
            i += 1
        if trie.num_of_word > 0:
            trie.num_of_word -= 1
            if self._is_leaf(trie) and trie.num_of_word == 0:
                self._clean_up(elem, bigger_prefix_subtrie, bigger_prefix_index)
            return True
        return False

    def search(self, elem):
        i = 0
        trie = self
        while i < len(elem):
            if trie.children[self._map_char_to_int(elem[i])] is None:
                return False
            trie = trie.children[self._map_char_to_int(elem[i])]
            i += 1
        if trie.num_of_word > 0:
            return True
        return False
