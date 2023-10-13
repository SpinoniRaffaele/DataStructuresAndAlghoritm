#include <stdio.h>
#include "heap/TestHeap.c"
#include "linked_list/TestLinkedList.c"
#include "Trie/TestTrie.c"
#include "stack/TestStack.c"
#include "queue/TestQueue.c"
#include "double_linked_list/TestDoubleLinkedList.c"

int test_everything() {
    int result = 0;
    result += test_heap();
    result += test_linked_list();
    result += test_trie();
    result += test_stack();
    result += test_queue();
    result += test_double_linked_list();
    return result;
}

int main() {
    return test_everything();
}
