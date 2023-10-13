typedef struct DoubleLinkedListNode_t {
    struct DoubleLinkedListNode_t *prev;
    struct DoubleLinkedListNode_t *next;
    int value;
} DoubleLinkedListNode;

typedef struct DoubleLinkedList_t {
    DoubleLinkedListNode *head;
    DoubleLinkedListNode *tail;
} DoubleLinkedList;

DoubleLinkedList *double_linked_list_init();

void double_linked_list_print(DoubleLinkedList *list);

void double_linked_list_print_reversed(DoubleLinkedList *list);

void double_linked_list_insert_top(DoubleLinkedList *list, int elem);

void double_linked_list_delete_top(DoubleLinkedList *list);

void double_linked_list_insert_bottom(DoubleLinkedList *list, int elem);

void double_linked_list_delete_bottom(DoubleLinkedList *list);

int double_linked_list_search(DoubleLinkedList *list, int elem);