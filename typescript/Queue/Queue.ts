export class Queue<T> {

  first: QueueNode<T>;

  last: QueueNode<T>;

  enqueue(element: T) {
    const newNode = new QueueNode(element);
    if (!this.first) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
  }

  dequeue(): T {
    if (this.isEmpty()) throw new Error();
    const result = this.first;
    if (this.first !== this.last) {
      this.first = this.first.next;
    } else {
      this.first = undefined;
      this.last = undefined;
    }
    return result.value;
  }

  isEmpty() {
    return !this.first;
  }
}

class QueueNode<T> {
  value: T;
  next: QueueNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}