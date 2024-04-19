import { RadixSort } from './RadixSort';

const testRadixSort = () => {
  const radix = new RadixSort();

  console.log(radix.radixSort([4, 50, 70,, 32, 1, 32, 56, 60, 39], 100));
};

testRadixSort();