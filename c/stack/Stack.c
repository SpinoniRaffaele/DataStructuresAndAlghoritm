#include <stdio.h>
#include <stdlib.h>
#include "Stack.h"

int STACK_INITIAL_CAPACITY = 3;

void stack_ensure_capacity(Stack *stack) {
    if (stack->top == (stack->items + stack->capacity -1)) {
        int *new_items = malloc(sizeof(int) * stack->capacity * 2);
        for (int i = 0; i < stack->capacity; i++) {
            new_items[i] = stack->items[i];
        }
        stack->items = new_items;
        stack->top = stack->items + (stack->capacity - 1);
        stack->capacity *= 2;
        printf("extra capacity added\n");
    }
}

Stack *stack_init() {
    Stack *stack = (Stack *)malloc(sizeof(Stack));
    stack->items = malloc(sizeof(int) * STACK_INITIAL_CAPACITY);
    stack->top = stack->items - 1;
    stack->capacity = STACK_INITIAL_CAPACITY;
    return stack;
}

void stack_print(Stack *stack) {
    int *cursor = stack->items;
    printf("[ ");
    while (cursor <= stack->top) {
        printf("%d ", *(cursor));
        cursor = cursor + 1;
    }
    printf("]\n");
}

void stack_insert(Stack *stack, int value) {
    stack_ensure_capacity(stack);
    stack->top += 1;
    *(stack->top) = value;
}

int stack_pop(Stack *stack) {
    int result = *(stack->top);
    stack->top -= 1;
    return result;
}