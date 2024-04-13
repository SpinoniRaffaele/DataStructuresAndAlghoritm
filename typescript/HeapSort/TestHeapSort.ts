import { HeapSort } from './HeapSort';

const testHeapSort = () => {
  const heapSort = new HeapSort();
  const arr = [4, 6, 2, 10, 1, -1, 0];
  heapSort.sort(arr);
  console.log(arr);
};

testHeapSort();