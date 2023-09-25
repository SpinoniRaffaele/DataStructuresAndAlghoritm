#include <stdio.h>
#include "heap/TestHeap.c"
#include "linked_list/TestLinkedList.c"
#include "Trie/TestTrie.c"

int main() {
    return test_everything();
}

int test_everything() {
    int result = 0;
    result += test_heap();
    result += test_linked_list();
    result += test_trie();
    return result;
}