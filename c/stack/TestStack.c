#include "Stack.h"
#include <stdio.h>

int test_stack() {
    printf("START - test stack\n");
    Stack *my_stack = stack_init();
    stack_insert(my_stack, 2);
    stack_insert(my_stack, 6);
    stack_insert(my_stack, 7);
    stack_print(my_stack);
    stack_insert(my_stack, 0);
    stack_print(my_stack);
    int result = stack_pop(my_stack);
    if (result != 0) {
        printf("ERROR: invlaid value returned by stack_pop\n");
        return 1;
    }
    printf("END - test stack\n");
    return 0;
}