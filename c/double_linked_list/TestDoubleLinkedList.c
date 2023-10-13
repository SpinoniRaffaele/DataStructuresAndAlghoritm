#include <stdlib.h>
#include <stdio.h>
#include "DoubleLinkedList.h"

int test_double_linked_list() {
    printf("START - test double linked list\n");
    DoubleLinkedList *my_list = double_linked_list_init();
    double_linked_list_insert_top(my_list, 2);
    double_linked_list_insert_top(my_list, 1);
    double_linked_list_insert_top(my_list, 0);
    if (double_linked_list_search(my_list, 0) == 0) {
        printf("ERROR - inserted element not found\n");
        return 1;
    }
    double_linked_list_print(my_list);
    double_linked_list_insert_bottom(my_list, 3);
    double_linked_list_insert_bottom(my_list, 4);
    double_linked_list_print(my_list);
    if (double_linked_list_search(my_list, 4) == 0) {
        printf("ERROR - inserted element not found\n");
        return 1;
    }
    double_linked_list_print_reversed(my_list);
    if (double_linked_list_search(my_list, 4) == 0) {
        printf("ERROR - inserted element not found\n");
        return 1;
    }
    double_linked_list_delete_top(my_list);
    double_linked_list_print(my_list);
    double_linked_list_delete_top(my_list);
    double_linked_list_delete_top(my_list);
    double_linked_list_delete_top(my_list);
    if (double_linked_list_search(my_list, 2) == 1) {
        printf("ERROR - deleted element found\n");
        return 1;
    }
    double_linked_list_print(my_list);
    double_linked_list_delete_top(my_list);
    double_linked_list_print(my_list);
    double_linked_list_insert_top(my_list, 0);
    double_linked_list_insert_top(my_list, 1);
    if (double_linked_list_search(my_list, 0) == 0) {
        printf("ERROR - inserted element not found\n");
        return 1;
    }
    double_linked_list_print(my_list);
    double_linked_list_delete_bottom(my_list);
    double_linked_list_delete_bottom(my_list);
    if (double_linked_list_search(my_list, 0) == 1) {
        printf("ERROR - deleted element found\n");
        return 1;
    }
    double_linked_list_print(my_list);
    printf("END - test double linked list\n");
    return 0;
}