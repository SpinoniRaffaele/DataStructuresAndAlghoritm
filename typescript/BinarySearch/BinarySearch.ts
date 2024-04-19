export class BinarySearch {

  public binarySearchIterative(arr: number[], value: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const middle = Math.floor(left + (left + right) / 2);
      if (arr[middle] < value) {
        left = middle + 1;
      }
      if (arr[middle] > value) {
        right = middle - 1;
      }
      return middle;
    }
    return -1;
  }

  public binarySearchRecursive(arr: number[], value: number): number {
    return this.binarySearchRecursiveInner(arr, value, 0, arr.length - 1);
  }

  private binarySearchRecursiveInner(arr: number[], value: number, low: number, high: number): number {
    if (low > high) {
      return -1;
    }
    const middle = Math.floor(low + (high + low) / 2);
    if (arr[middle] < value) {
      return this.binarySearchRecursiveInner(arr, value, middle + 1, high);
    }
    if (arr[middle] > value) {
      return this.binarySearchRecursiveInner(arr, value, low, middle - 1);
    }
    return middle;
  }
}