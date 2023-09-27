#define TRIE_NUM_OF_CHARACTER 26    //lower letters of the english alphabet 

typedef struct Trie_t {
    int num_of_words;
    struct Trie_t *children[TRIE_NUM_OF_CHARACTER];
} Trie;

Trie *trie_init();

void trie_insert(Trie *trie, char *elem);

int trie_delete(Trie *trie, char *elem);

int trie_search(Trie *trie, char *elem);

void trie_print(Trie *trie);

