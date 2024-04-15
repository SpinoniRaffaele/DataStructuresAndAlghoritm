export class Stack<T> {
  head: StackNode<T>;

  public push(element: T) {
    const newNode = new StackNode(element);
    const previousHead = this.head;
    this.head = newNode;
    this.head.next = previousHead;
  }

  public pop(): T {
    if (this.isEmpty()) throw new Error();
    const result = this.head.value;
    this.head = this.head.next;
    return result;
  }

  public isEmpty(): boolean {
    return !this.head;
  }

  public print() {
    let cursor = this.head;
    while (cursor) {
      console.log(cursor.value);
      cursor = cursor.next;
    }
  }
}

class StackNode<T> {
  value: T;
  next: StackNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}