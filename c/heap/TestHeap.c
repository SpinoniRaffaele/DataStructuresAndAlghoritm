#include "heap.h"
#include <stdio.h>

int test_heap() {
    printf("START - Testing Heap\n");
    Heap *my_heap = heap_init();
    heap_print(my_heap);
    heap_insert(3, my_heap);
    heap_insert(2, my_heap);
    heap_insert(4, my_heap);
    heap_insert(1, my_heap);
    heap_insert(2, my_heap);
    heap_insert(10, my_heap);

    heap_print(my_heap);
    int val = heap_pop_root(my_heap);
    if (val != 10) {
        fprintf(stderr, "test error expected %d, got %d\n", 10, val);
        return 1;
    }
    heap_print(my_heap);
    printf("END - Testing Heap\n");
    return 0;
}