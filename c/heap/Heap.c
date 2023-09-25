//Max Heap implementation
#include <stdio.h>
#include <stdlib.h>
#include "Heap.h"


int INITIAL_CAPACITY = 10;

Heap* heap_init() {
    Heap *heap = (Heap*) malloc(sizeof(Heap));
    heap->items = malloc(sizeof(int) * INITIAL_CAPACITY);
    heap->total_capacity = INITIAL_CAPACITY;
    heap->size = 0;
    return heap;
}

int get_parent_position(int position) {
    return position/2;
}

int get_bigger_child_position(Heap *heap, int position) {
    int left = 0;
    int left_child_pos = (position * 2) + 1;
    int right = 0;
    int right_child_pos = (position * 2) + 2;
    if (heap->size >= left_child_pos) {
        left = heap->items[left_child_pos];
        if (heap->size >= right_child_pos) {
            right = heap->items[right_child_pos];
        }
    }

    if (left == right && left == 0) {
        return 0;
    }
    if (right >= left) {
        return right_child_pos;
    }
    return left_child_pos;
}

void swap(Heap *heap, int pos, int otherPos) {
    int temp = heap->items[pos];
    heap->items[pos] = heap->items[otherPos];
    heap->items[otherPos] = temp;
}

void heapify(Heap *heap) {
    int position = heap->size - 1;
    int parentPosition = get_parent_position(position);
    while (heap->items[position] > heap->items[parentPosition]) {
        swap(heap, position, parentPosition);
        position = parentPosition;
        parentPosition = get_parent_position(position);
    }
}

void heapifyDown(Heap *heap) {
    int position = 0;
    int childPosition = get_bigger_child_position(heap, position);
    while(childPosition > 0 && heap->items[position] < heap->items[childPosition]) {
        swap(heap, position, childPosition);
        position = childPosition;
        childPosition = get_bigger_child_position(heap, position);
    }
}

void ensure_items_memory(Heap *heap) {
    if ((heap->size + 1) > heap->total_capacity) {
        printf("new memory allocated\n");
        int *temp = malloc(sizeof(int) * heap->total_capacity * 2);
        for (int i = 0; i < heap->size; i++) {
            temp[i] = heap->items[i];
        }
        free(heap->items);
        heap->items = temp;
    }
}

void heap_insert(int elem, Heap *heap) {
    ensure_items_memory(heap);
    heap->items[heap->size] = elem;
    heap->size = heap->size + 1;
    heapify(heap);
}

int heap_pop_root(Heap *heap) {
    int result = heap->items[0];
    heap->items[0] = heap->items[heap->size - 1];
    heap->size--;
    heapifyDown(heap);
    return result;
}
void heap_print(Heap *heap) {
    printf("[ ");
    for (int i = 0; i < heap->size; i++) {
        printf("%d ", heap->items[i]);
    }
    printf("]\n");
}
