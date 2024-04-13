import { QuickSort } from './QuickSort';

const testQuickSort = () => {
  const quickSort = new QuickSort();
  const arr = [4, 3, 6, 10, 2, 1, -1, 3];
  quickSort.sort(arr);
  console.log(arr);
};

testQuickSort();