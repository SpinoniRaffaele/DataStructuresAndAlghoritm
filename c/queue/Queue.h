typedef struct Queue_t {
    char *items;
    int total_capacity;
    char *top;
    char *bottom;
} Queue;

void queue_print(Queue *queue);

Queue *queue_init();

void queue_enqueue(Queue *queue, char elem);

char queue_dequeue(Queue *queue);