#include <stdlib.h>
#include <stdio.h>
#include "Queue.h"

int QUEUE_INITIAL_CAPACITY = 3;

char *increase_in_module(char *pointer, Queue *queue) {
    return queue->items + ((pointer + 1 - queue->items) % queue->total_capacity);
}

void ensure_capacity(Queue *queue) {
    if (increase_in_module(queue->top, queue) == queue->bottom) {
        printf("increasing capacity of queue\n");
        char *newItems = (char *) malloc(sizeof(char) * queue->total_capacity * 2);
        char *cursor = queue->bottom;
        int index = 0;
        while(cursor != queue->top) {
            newItems[index] = *cursor;
            cursor = increase_in_module(cursor, queue);
            index++;
        }
        free(queue->items);
        queue->items = newItems;
        queue->bottom = queue->items;
        queue->top = queue->items + queue->total_capacity - 1;
        queue->total_capacity *= 2;
    }
}

void queue_print(Queue *queue) {
    printf("[ ");
    char *cursor = queue->bottom;
    if (queue->top != queue->bottom) {
        while (cursor != queue->top) {
            printf("%c ", *cursor);
            cursor = increase_in_module(cursor, queue);
        }
    }
    printf("]\n");
}

Queue *queue_init() {
    Queue *queue = (Queue *) malloc(sizeof(queue));
    queue->total_capacity = QUEUE_INITIAL_CAPACITY;
    queue->items = (char *) malloc(sizeof(char) * QUEUE_INITIAL_CAPACITY);
    queue->top = queue->items;
    queue->bottom = queue->items;
}

void queue_enqueue(Queue *queue, char elem) {
    ensure_capacity(queue);
    *queue->top = elem;
    queue->top = increase_in_module(queue->top, queue);
}

/**
 * Returns _ when the dequeue operation is not possible
*/
char queue_dequeue(Queue *queue) {
    if (queue->bottom == queue->top) {
        return '_';
    }
    char value = *queue->bottom;
    queue->bottom = increase_in_module(queue->bottom, queue);
    return value;
}