#include <stdio.h>
#include "LinkedList.h"

int test_linked_list() {
    printf("START - Test linked list\n");
    LinkedList *list = linked_list_init();
    linked_list_print(list);
    linked_list_insert(&list, 10);
    linked_list_insert(&list, 5);
    linked_list_insert(&list, 2);
    linked_list_print(list);
    if (linked_list_search(list, 2) != 1) {
        fprintf(stderr, "ERROR while inserting");
        return 1;
    }
    linked_list_remove_top(&list);
    if (linked_list_search(list, 2) != 0) {
        fprintf(stderr, "ERROR while deleting");
        return 1;
    }
    linked_list_remove_top(&list);
    linked_list_remove_top(&list);
    linked_list_print(list);
    printf("END - Test linked list\n");
    return 0;
}
