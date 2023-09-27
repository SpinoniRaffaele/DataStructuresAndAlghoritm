#include "Trie.h"
#include <stdio.h>
#include <stdlib.h>

Trie *trie_init() {
    Trie *trie = (Trie *) malloc(sizeof(Trie));
    trie->num_of_words = 0;
    for (int i = 0; i < TRIE_NUM_OF_CHARACTER; i++) {
        trie->children[i] = NULL;
    }
    return trie;
}

int trie_mapping_char(char character) {
    return (int)character - (int)'a';
}
char trie_mapping_int(int index) {
    return (char)(index + (int)'a');
}

/**
 * 1 means true, 0 means false
*/
int is_leaf(Trie *trie_node) {
    for (int i=0; i < TRIE_NUM_OF_CHARACTER; i++) {
        if (trie_node->children[i] != NULL) {
            return 0;
        }
    }
    return 1;
}

void trie_free_up(char *elem, Trie *start_cursor, int start_index) {
    Trie *next_node = start_cursor->children[trie_mapping_char(elem[start_index])];
    if (is_leaf(next_node) == 0) {
        trie_free_up(elem, next_node, start_index + 1);
    }
    free(next_node);
    start_cursor->children[trie_mapping_char(elem[start_index])] = NULL;
}

void trie_insert(Trie *trie, char *elem) {
    int index = 0;
    Trie *cursor = trie;
    while(elem[index] != '\0') {
        Trie *next_node = cursor->children[trie_mapping_char(elem[index])];
        if (next_node == NULL) {
            next_node = trie_init();
            cursor->children[trie_mapping_char(elem[index])] = next_node;
        }
        cursor = next_node;
        index++;
    }
    cursor->num_of_words++;
}

/**
 * no memory deallocation
*/
int trie_simple_delete(Trie *trie, char *elem) {
    int index = 0;
    Trie *cursor = trie;
    while(elem[index] != '\0' && cursor != NULL) {
        cursor = cursor->children[trie_mapping_char(elem[index])];
        index++;
    }
    if (cursor->num_of_words > 0) {
        cursor->num_of_words--;
        return 0;
    }
    return 1;
}

/**
 * returns 1 if no deletion happened, 0 otherwise
*/
int trie_delete(Trie *trie, char *elem) {
    int index = 0;
    Trie *cursor = trie;
    int bigger_prefix_index = index;
    Trie *bigger_prefix_cursor = trie;
    while(elem[index] != '\0' && cursor != NULL) {
        if (cursor->num_of_words > 0) {
            bigger_prefix_cursor = cursor;
            bigger_prefix_index = index;
        }
        cursor = cursor->children[trie_mapping_char(elem[index])];
        index++;
    }
    if (cursor->num_of_words > 0) {
        cursor->num_of_words--;
        if (is_leaf(cursor) && cursor->num_of_words == 0) {
            trie_free_up(elem, bigger_prefix_cursor, bigger_prefix_index);
        }
        return 0;
    }
    return 1;
}

/**
 * 1 means found, 0 means not found
*/
int trie_search(Trie *trie, char *elem) {
    Trie *cursor = trie;
    int index = 0;
    while(elem[index] != '\0') {
        Trie *next_node = cursor->children[trie_mapping_char(elem[index])];
        if (next_node == NULL) {
            return 0;
        }
        cursor = next_node;
        index++;
    }
    if (cursor->num_of_words > 0) return 1;
    return 0;
}

void trie_print(Trie *trie) {
    for (int i = 0; i < TRIE_NUM_OF_CHARACTER; i++) {
        if (trie->children[i] != NULL) {
            printf("Node: %c with %d worlds\n", trie_mapping_int(i), trie->children[i]->num_of_words);
            trie_print(trie->children[i]);
        }
    }
}