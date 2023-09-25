typedef struct LinkedList_t {
    int value;
    struct LinkedList_t *next;
} LinkedList;

LinkedList *linked_list_init();

void linked_list_print(LinkedList *list);

void linked_list_insert(LinkedList **list, int elem);

int linked_list_search(LinkedList *list, int elem);

void linked_list_remove_top(LinkedList **list);