#include <stdio.h>
#include "heap/TestHeap.c"
#include "linked_list/TestLinkedList.c"
#include "Trie/TestTrie.c"
#include "stack/TestStack.c"

int test_everything() {
    int result = 0;
    result += test_heap();
    result += test_linked_list();
    result += test_trie();
    result += test_stack();
    return result;
}

int main() {
    return test_everything();
}
