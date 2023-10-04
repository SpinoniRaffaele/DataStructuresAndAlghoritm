#include <stdio.h>
#include <stdlib.h>
#include "Queue.h"

int test_queue() {
    printf("START - test queue\n");
    Queue *my_queue = queue_init();
    queue_print(my_queue);
    queue_enqueue(my_queue, 'a');
    queue_enqueue(my_queue, 'b');
    if (queue_dequeue(my_queue) != 'a') {
        printf("ERROR - unexpected value dequeued\n");
        return 1;
    }
    queue_enqueue(my_queue, 'c');
    if (queue_dequeue(my_queue) != 'b') {
        printf("ERROR - unexpected value dequeued\n");
        return 1;
    }
    queue_enqueue(my_queue, 'd');
    queue_enqueue(my_queue, 'e');
    queue_enqueue(my_queue, 'f');
    queue_print(my_queue);
    if (queue_dequeue(my_queue) != 'c') {
        printf("ERROR - unexpected value dequeued\n");
        return 1;
    }
    printf("END - test queue\n");
    return 0;
}