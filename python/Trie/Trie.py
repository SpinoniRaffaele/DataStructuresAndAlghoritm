# class representing the trie datastructure
NUM_OF_LETTER = 26  # length of the lowercase letter of the english alphabet


def print_trie_(trie, depth):
    for index, child in enumerate(trie.children):
        if child is not None:
            print(chr(index + ord('a')) + " " + str(child.num_of_word))
            print_trie_(child, depth + 1)


class Trie:
    def __init__(self):
        self.num_of_word = 0
        self.children = []
        for i in range(NUM_OF_LETTER):
            self.children.append(None)

    def _map_char_to_int(self, elem):
        return ord(elem) - ord('a')

    def insert(self, elem):
        i = 0
        trie = self
        while i < len(elem):
            if trie.children[self._map_char_to_int(elem[i])] is None:
                trie.children[self._map_char_to_int(elem[i])] = Trie()
            trie = trie.children[self._map_char_to_int(elem[i])]
            i += 1
        trie.num_of_word += 1

    def delete(self, elem):
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

    def print_trie(self):
        print_trie_(self, 0)
