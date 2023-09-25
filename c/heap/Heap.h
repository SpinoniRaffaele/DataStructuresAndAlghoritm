typedef struct Heap_t {
    int size;
    int *items; 
    int total_capacity;
} Heap;

void heap_insert(int elem, Heap *heap);

Heap* heap_init();

void heap_print(Heap *heap);

int heap_pop_root(Heap *heap);