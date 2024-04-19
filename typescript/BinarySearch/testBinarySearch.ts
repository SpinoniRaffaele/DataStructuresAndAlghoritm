import { BinarySearch } from './BinarySearch';

const testBinarySearch = () => {
  const binarySearch = new BinarySearch();
  console.log(binarySearch.binarySearchIterative(
      [1, 1, 1, 2, 4, 7, 8, 9], 2));
  console.log(binarySearch.binarySearchRecursive(
      [1, 1, 1, 2, 4, 7, 8, 9], 2));
  console.log(binarySearch.binarySearchRecursive(
      [1, 1, 1, 2, 4, 7, 8, 9], 9));
};

testBinarySearch();