import { Queue } from './Queue';

const testQueue = () => {
  const queue = new Queue<number>();

  queue.enqueue(1);
  console.log(queue.dequeue());
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.isEmpty());
};

testQueue();