package LinkedList;

import java.util.Objects;

public class LinkedList {

    Node list;

    public static class Node {
        String value;
        Node next;

        public Node(String value) {
            this.value = value;
            this.next = null;
        }
    }

    public LinkedList() {
        this.list = null;
    }

    public String print() {
        Node cursor = this.list;
        StringBuilder result = new StringBuilder();
        result.append("[\n");
        while(cursor != null) {
            result.append(cursor.value).append("\n");
            cursor = cursor.next;
        }
        result.append("]");
        return result.toString();
    }

    public void insert(String newValue) {
        Node newNode = new Node(newValue);
        newNode.next = this.list;
        this.list = newNode;
    }

    public void delete() {
        if (this.list != null) {
            this.list = this.list.next;
        }
    }

    public boolean search(String value) {
        Node cursor = this.list;
        while (cursor != null) {
            if (Objects.equals(cursor.value, value)) {
                return true;
            }
            cursor = cursor.next;
        }
        return false;
    }
}
