export class MergeSort {
  public mergeSort(arr: number[]) {
    this.mergeSortInner(arr, 0, arr.length - 1);
  }

  private mergeSortInner(arr: number[], low: number, high: number) {
    if (low < high) {
      const middle = Math.floor(low + (high - low) / 2);
      this.mergeSortInner(arr, low, middle);
      this.mergeSortInner(arr, middle + 1, high);
      this.merge(arr, low, middle + 1, high);
    }
  }

  private merge(arr: number[], low: number, middle: number, high: number) {
    const helper = new Array(arr.length);
    for (let i = low; i <= high; i++) {
      helper[i] = arr[i];
    }

    let lowIndex = low;
    let highIndex = middle;
    let counter = low;

    while (lowIndex < middle && highIndex <= high) {
      if (helper[lowIndex] <= helper[highIndex]) {
        arr[counter] = helper[lowIndex];
        lowIndex++;
      } else {
        arr[counter] = helper[highIndex];
        highIndex++;
      }
      counter++;
    }
    console.log("endloop: ", low, middle, high);

    // copy the remaining left part from the helper (the right part is already there)
    for (let i = lowIndex; i < middle; i++) {
      arr[counter] = helper[i];
      counter++;
    }
  }
}