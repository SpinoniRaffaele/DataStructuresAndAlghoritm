import { Stack } from './Stack';

const testStack = () => {
  const stack = new Stack<number>();

  stack.push(1);
  stack.push(2);
  stack.print();
  console.log(stack.pop());
  console.log(stack.isEmpty());
  console.log(stack.pop());
  console.log(stack.isEmpty());
};

testStack();