export class QuickSort {

  public sort(arr: number[]) {
    this.sortRange(arr, 0, arr.length - 1);
  }

  private sortRange(arr: number[], begin: number, end: number) {
    if (begin >= end) return;
    const pivotPosition = this.partition(arr, begin, end);
    this.sortRange(arr, begin, pivotPosition - 1);
    this.sortRange(arr, pivotPosition + 1, end);
  }

  private partition(arr: number[], begin: number, end: number): number {
    const pivot = arr[end];
    let storedIndex = begin;

    for(let i = begin; i <= end; i++) {
      if (arr[i] <= pivot) {
        this.swap(storedIndex, i, arr);
        storedIndex++;
      }
    }
    return storedIndex - 1;
  }

  private swap(pos1: number, pos2 : number, arr: number[]): void {
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  }
}