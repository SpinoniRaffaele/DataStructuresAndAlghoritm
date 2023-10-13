#include <stdio.h>
#include <stdlib.h>
#include "DoubleLinkedList.h"

DoubleLinkedList *double_linked_list_init() {
    DoubleLinkedList *list = malloc(sizeof(DoubleLinkedList));
    list->head = NULL;
    list->tail = NULL;
    return list;
}

void double_linked_list_print(DoubleLinkedList *list) {
    DoubleLinkedListNode *cursor = list->head;
    printf("[ ");
    while(cursor != NULL) {
        printf("%d ", cursor->value);
        cursor = cursor->next;
    }
    printf("]\n");
}

void double_linked_list_print_reversed(DoubleLinkedList *list) {
    DoubleLinkedListNode *cursor = list->tail;
    printf("[ ");
    while(cursor != NULL) {
        printf("%d ", cursor->value);
        cursor = cursor->prev;
    }
    printf("]\n");
}

void double_linked_list_insert_top(DoubleLinkedList *list, int elem) {
    DoubleLinkedListNode *new_node = malloc(sizeof(DoubleLinkedListNode));
    new_node->value = elem;
    new_node->next = list->head;
    new_node->prev = NULL;
    if (list->head != NULL) {
        list->head->prev = new_node;
    }
    list->head = new_node;
    if (list->tail == NULL) {
        list->tail = new_node;
    }
}

void double_linked_list_delete_top(DoubleLinkedList *list) {
    if(list->head != NULL) {
        DoubleLinkedListNode *new_head = list->head->next;
        if (list->head->next != NULL) {
            list->head->next->prev = NULL;
        }
        free(list->head);
        list->head = new_head;
        if (list->head == NULL) {
            list->tail = NULL;
        }
    }
}

void double_linked_list_insert_bottom(DoubleLinkedList *list, int elem) {
    DoubleLinkedListNode *new_node = malloc(sizeof(DoubleLinkedListNode));
    new_node->value = elem;
    new_node->next = NULL;
    new_node->prev = list->tail;
    if (list->tail != NULL) {
        list->tail->next = new_node;
    }
    list->tail = new_node;
    if (list->head == NULL) {
        list->head = new_node;
    }
}

void double_linked_list_delete_bottom(DoubleLinkedList *list) {
    if (list->tail != NULL) {
        DoubleLinkedListNode *new_tail = list->tail->prev;
        if (list->tail->prev != NULL) {
            list->tail->prev->next = NULL;
        }
        free(list->tail);
        list->tail = new_tail;
        if (list->tail == NULL) {
            list->head = NULL;
        }
    }
}

int double_linked_list_search(DoubleLinkedList *list, int elem) {
    DoubleLinkedListNode *cursor = list->head;
    while (cursor != NULL) {
        if (cursor->value == elem) {
            return 1;
        }
        cursor = cursor->next;
    }
    return 0;
}