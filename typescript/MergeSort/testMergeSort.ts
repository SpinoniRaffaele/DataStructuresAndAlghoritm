import { MergeSort } from './MergeSort';

const testMergeSort = () => {
  const mergeSort = new MergeSort();
  const array = [6, 5, 1, 7, 5, 7, 10]
  mergeSort.mergeSort(array);

  console.log(array);
};

testMergeSort();