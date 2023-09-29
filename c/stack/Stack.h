typedef struct Stack_t {
    int *items;
    int *top;
    int capacity;
} Stack;

Stack *stack_init();

void stack_insert(Stack *stack, int value);

void stack_print(Stack *stack);

int stack_pop(Stack *stack);