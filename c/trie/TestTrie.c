#include <stdio.h>
#include "Trie.h"

int test_trie() {
    printf("START - test trie\n");
    Trie *my_trie = trie_init();
    trie_insert(my_trie, "raffaele");
    trie_insert(my_trie, "raf");
    trie_insert(my_trie, "dada");
    trie_print(my_trie);
    printf("delete\n");
    trie_delete(my_trie, "raffaele");
    trie_print(my_trie);
    int search_raffaele = trie_search(my_trie, "raffaele");
    if (search_raffaele == 1) {
        printf("ERRO - found a deleted element\n");
        return 1;
    }
    int search_raf = trie_search(my_trie, "raf");
    if (search_raf == 0) {
        printf("ERRO - not found a present element\n");
        return 1;
    }
    trie_insert(my_trie, "raffaele");
    trie_delete(my_trie, "raf");
    printf("delete raf\n");
    trie_print(my_trie);
    printf("END - test trie\n");
    return 0;
}