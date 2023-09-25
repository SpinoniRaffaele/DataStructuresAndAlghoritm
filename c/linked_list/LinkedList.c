#include <stdio.h>
#include <stdlib.h>
#include "LinkedList.h"

LinkedList *linked_list_init() {
    return NULL;
}

void linked_list_print(LinkedList *list) {
    printf("[ ");
    LinkedList *temp = list;
    while(temp != NULL) {
        printf("%d ", temp->value);
        temp = temp->next;
    }
    printf("]\n");
}

void linked_list_insert(LinkedList **list, int elem) {
    LinkedList *temp = (LinkedList *) malloc(sizeof(LinkedList));
    temp->next = *list;
    temp->value = elem;
    *list = temp;
    return;
}

int linked_list_search(LinkedList *list, int elem) {
    LinkedList *temp = list;
    while(temp != NULL) {
        if (temp->value == elem) {
            return 1;
        }
        temp = temp->next;
    }
    return 0;
}

void linked_list_remove_top(LinkedList **list) {
    LinkedList *old_head = *list;
    *list = (*list)->next;
    old_head->next = NULL;
    free(old_head);
}