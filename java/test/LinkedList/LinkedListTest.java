package LinkedList;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LinkedListTest {
    private final LinkedList list = new LinkedList();

    @Test
    public void testLinkedListInsertion() {
        list.insert("first");
        list.insert("second");
        assertEquals("[\nsecond\nfirst\n]", list.print());
    }

    @Test
    public void testLinkedListDeletion() {
        list.insert("first");
        list.insert("second");
        list.delete();
        assertEquals("[\nfirst\n]", list.print());
        list.delete();
        assertEquals("[\n]", list.print());
    }

    @Test
    public void testLinkedListSearch() {
        list.insert("first");
        list.insert("second");
        assertTrue(list.search("first"));
        assertFalse(list.search("FIRST"));
    }
}